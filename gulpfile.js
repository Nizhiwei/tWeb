/**
 * Created by nizhiwei on 2017/4/14.
 */
let commonJs=`<script type="text/javascript" src="../../common/js/jquery-2.2.4.min.js"></script>
        <script type="text/javascript" src="../../common/js/vue.min.js"></script>
        <script type="text/javascript" src="../../common/js/layer.js"></script>
        <script type="text/javascript" src="../../common/js/base.js"></script></body>`;
let commonHeader=`<head><meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="renderer" content="webkit">
        <meta name="robots" content="index,follow">
        <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0,minimum-scale=1.0,maximum-scale=1.0">
        <meta name="format-detection" content="telephone=no,address=no,email=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-title" content="yes">
        <meta http-equiv="x-rim-auto-match" content="none">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <link rel="stylesheet" type="text/css" href="../../common/css/reset.css">
        <link rel="stylesheet" type="text/css" href="../../common/css/font-awesome.min.css">
        `;
let gulp = require('gulp'),
    del = require('del'),       //删除文件
    replace  = require('gulp-replace'),//正则
    babel = require('gulp-babel'),  //es6转码
    less = require('gulp-less'),
    htmlmin = require('gulp-htmlmin'),
    rev = require('gulp-rev'),//写入md5值
    revFormat  = require('gulp-rev-Format'),//版本控制
    revReplace  = require('gulp-rev-replace'),//版本控制
   //  cached = require('gulp-cached'), // 缓存未修改的文件，不多次编译
    uglify = require('gulp-uglify'),   //js压缩文件
    cleancss = require('gulp-clean-css'),// css压缩
    autoprefixer = require('gulp-autoprefixer'),// 添加 CSS 浏览器前缀
    plumber = require("gulp-plumber"),//出错打印日志不终止进程
    sourcemaps = require('gulp-sourcemaps'),//source-map
    sequence = require('gulp-sequence'),//顺序执行任务
    browserSync = require('browser-sync'),//浏览器自动刷新
    reload = browserSync.reload;

// clean 清空 dist 目录
gulp.task('clean', function(cb) {
    return del(['fanbei-web/h5'],cb);
});
//html版本控制、压缩
gulp.task('html', function () {
    let manifest = gulp.src(["fanbei-web/h5/_srcmap/_rev/**/*.json"]);
    function modifyUnreved(filename) {
        filename=filename.split("/");
        return filename[filename.length-1];
    }
    function modifyReved(filename) {
        filename=filename.split("/");
        filename=filename[filename.length-1];
        // filename是：admin.69cef10fff.cache.css的一个文件名
        // 在这里才发现刚才用gulp-rev-format的作用了吧？就是为了做正则匹配，
        if (filename.indexOf('.cache') > -1) {
            // 通过正则和relace得到版本号：69cef10fff
            const _version = filename.match(/\.[\w]*\.cache/)[0].replace(/(\.|cache)*/g,"");
            // 把版本号和gulp-rev-format生成的字符去掉，剩下的就是原文件名：admin.css
            const _filename = filename.replace(/\.[\w]*\.cache/,"");
            // 重新定义文件名和版本号：admin.css?v=69cef10fff
            filename = _filename + "?v=" + _version;
            // 返回由gulp-rev-replace替换文件名
            return filename;
        }
        return filename;
    }
    return gulp.src(['fanbei-web/h5/_srcmap/_rev/**/*.json','src/h5/**/*.html','src/h5/**/*.ejs'])
        .pipe(replace(/(\.[a-z]+)\?(v=)?[^\'\"\&]*/g,"$1"))
        .pipe(revReplace({
            manifest: manifest,
            modifyUnreved: modifyUnreved,
            modifyReved: modifyReved
        }))
        .pipe(replace('<head>',function () {
            return commonHeader
        }))
        .pipe(replace('</body>',function () {
            return commonJs
        }))
        .pipe(htmlmin({
            removeComments: true,//清除HTML注释
            collapseWhitespace: true,//压缩HTML
            collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
            removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
            removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
            minifyJS: true,//压缩页面JS
            minifyCSS: true//压缩页面CSS
        }))
        // .pipe(revCollector({replaceReved: true}))
        .pipe(gulp.dest('fanbei-web/h5'))
        .pipe(reload({ stream:true }));
});
// es6编译为es5
gulp.task('es6', function() {
    return gulp.src(['src/h5/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(babel({presets: ['es2015']}))
        // .pipe(cached('js'))
        .pipe(uglify())                  //压缩
        .pipe(sourcemaps.write('_srcmap'))
        .pipe(gulp.dest('fanbei-web/h5'))
        .pipe(rev())
        .pipe(revFormat({
            prefix: '.', // 在版本号前增加字符
            suffix: '.cache', // 在版本号后增加字符
            lastExt: true
        }))
        .pipe(rev.manifest())
        .pipe(gulp.dest('fanbei-web/h5/_srcmap/_rev/js'));
});
//less编译为css
gulp.task('less', function() {
    return gulp.src(['src/h5/**/*.less','src/h5/**/*.css'])
        .pipe(plumber())
        .pipe(less())
        // .pipe(cached('less'))
        .pipe(autoprefixer('last 6 version'))
        .pipe(cleancss())
        .pipe(gulp.dest('fanbei-web/h5'))
        .pipe(rev())
        .pipe(revFormat({
            prefix: '.', // 在版本号前增加字符
            suffix: '.cache', // 在版本号后增加字符
            lastExt: false
        }))
        .pipe(rev.manifest())
        .pipe(gulp.dest('fanbei-web/h5/_srcmap/_rev/css'))
        .pipe(reload({ stream:true }));
});
// 清理目录并重新编译
gulp.task('build',function (cb) {
    sequence('clean',['less','es6'],'html')(cb)
});
// 浏览器重载
gulp.task('js-watch', ['es6'], browserSync.reload);
// 监控 build 目录的改动自动编译
gulp.task('default',['build'],function () {
    browserSync({
        open:false,
        proxy:'localhost:6666'
    });
     gulp.watch(['src/h5/**/*.html','src/h5/**/*.ejs'],['html']);
     gulp.watch('src/h5/**/*.js',['js-watch']);
     gulp.watch(['src/h5/**/*.less','src/h5/**/*.css'],['less']);
});

/**
 * Created by nizhiwei-labtop on 2017/6/27.
 */
let webpack=require('webpack');
let path = require('path');
let glob = require('glob');
let HtmlWebpackPlugin = require('html-webpack-plugin'); //html加静态资源
let ExtractTextPlugin = require("extract-text-webpack-plugin"); //单独打包css

let entries = getEntry('src/views/**/*.js');
function getEntry(globPath) {
    let entries = {},name;
    glob.sync(globPath).forEach(function (url){
        name = url.split('/');
        entries[name[2]] = './'+url;
    });
    return entries;
}
module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: {
        index:'src/views/index.js'
    },
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, 'WEB-INF'),
        filename: 'js/[name].js'
        // chunkFilename: 'js/[id].chunk.js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        //
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    module: {
        // preLoaders: [
        //     {
        //         test: /\.vue$/,
        //         loader: 'eslint',
        //         include: [
        //             path.join(projectRoot, 'src')
        //         ],
        //         exclude: /node_modules/
        //     },
        //     {
        //         test: /\.js$/,
        //         loader: 'eslint',
        //         include: [
        //             path.join(projectRoot, 'src')
        //         ],
        //         exclude: /node_modules/
        //     }
        // ],
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?presets=es2015',
                include:'/src/',
                exclude:'/node_modules/'
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            //     loader: 'url-loader?limit=8192&name=file/img/[hash].[ext]'     //当图片大小小于limit参数的时候，会自动启用base64编码图片
            // },
            // {
            //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            //     loader: 'url-loader?limit=8192&name=file/[hash].[ext]'
            // },
            {
                test: /\.(less|css)$/,
                loaders: ExtractTextPlugin.extract({fallback:'style-loader', use:'css-loader!less-loader!autoprefixer-loader'}),
            }
        ]
    },
    // eslint: {
    //     configFile: '.eslintrc.js'
    // },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common', // 将公共模块提取，生成名为`common`的chunk
            chunks: ['index','info'], //提取哪些模块共有的部分
            minChunks: 3 // 提取至少3个模块共有的部分
        }),
        new ExtractTextPlugin("css/[name].css"),
    ]
};
let pages = getEntry('src/views/**/*.html');

for (let pathname in pages) {
    // 配置生成的html文件，定义路径等
    let conf = {
        filename: pathname + '.html',
        template: pages[pathname],   // 模板路径
        inject: true,              // js插入位置
        hash:true,
        minify: {
            //removeComments: true,
            //collapseWhitespace: true,
            //removeAttributeQuotes: true
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    };

    if (pathname in module.exports.entry) {
        conf.chunks = ['manifest', 'common', pathname];
    }
    module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}
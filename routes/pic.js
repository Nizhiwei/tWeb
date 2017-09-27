/**
 * Created by nizhiwei-labtop on 2017/7/4.
 */
let express = require('express');
let router = express.Router();
let fs = require('fs');
let path = require('path');
let formidable  = require('formidable');
/* GET home page. */
router.post('/uploadPic', function(req, res, next) {
    const form = formidable.IncomingForm({
        encoding : 'utf-8',
        uploadDir:"./fanbei-web/picSpace",
        keepExtensions:true,
        maxFieldsSize : 20 * 1024 * 1024
    });
    let allFile=[];
    form.on('progress', function(bytesReceived, bytesExpected) {//在控制台打印文件上传进度
        var progressInfo = {
            value: bytesReceived,
            total: bytesExpected
        };
        console.log('[progress]: ' + JSON.stringify(progressInfo));
    })
        .on('file', function (filed, file) {
            allFile.push([filed, file]);//收集传过来的所有文件
        })
        .on('end', function() {
            res.end('上传成功！');
        })
        .on('error', function(err) {
            console.error('上传失败：', err.message);
            next(err);
        })
        .parse(req,function(err, fields, files){
            if(err){
                console.log(err);
            }
            allFile.forEach(function(file,index){
                var fieldName=file[0];
                var types = file[1].name.split('.');
                var date = new Date();
                var ms = Date.parse(date);
                fs.renameSync(file[1].path,form.uploadDir+"/"+types[0]+"."+String(types[types.length-1]));//重命名文件，默认的文件名是带有一串编码的，我们要把它还原为它原先的名字。
            });
        });
});
router.post('/allPic',function (req,res) {
    let picPath=[];
    fs.readdir('./fanbei-web/picSpace/',function (err,files) {
        if(err){
            return console.log(err);
        }
        files.forEach(function (file) {
            picPath.push(file);
        });
        res.send(picPath);
    })
});

module.exports = router;

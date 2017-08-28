/* 08 文件上传*/

var http = require('http');
var formidable = require('formidable');
var util = require('util');

http.createServer(function(req,res){
    if (req.url == '/dopost' && req.method.toLowerCase() == 'post') {
        // 创建一个对象
        var form = new formidable.IncomingForm();
        //图片上传位置
        form.uploadDir = "./uploads";
        //执行里面的回调函数的时候，表单已经全部接收完毕了。
        form.parse(req, function(err, fields, files) {
            console.log(fields);//纯文件以外其他信息
            console.log(files);//上传文件信息
            console.log(util.inspect({fields: fields, files: files}));
            res.end("end")
        });
        return;
    }
}).listen(3000,' 192.168.1.27')

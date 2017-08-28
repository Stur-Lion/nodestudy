/* 09 修改文件名*/

var http = require('http');
var fs = require('fs');
var sd = require('silly-datetime');
var formidable = require('formidable');
var path = require('path');
var util = require('util')


http.createServer(function(req,res){
    console.log(req.url);
    if(req.url=='/dopost'&&req.method.toLowerCase()=='post'){
        var form = new formidable.IncomingForm();
        form.uploadDir = "./uploads";
        form.parse(req, function(err, fields, files) {
            if(err){
                throw err
                return
            }
            var time = sd.format(new Date(), 'YYYYMMDDHHmmss');
            var randomNum = parseInt(Math.random()*89999+10000);
            var xtname = path.extname(files.img.name)
            var oldname = __dirname+'/'+files.img.path
            var newname = __dirname+'/uploads/'+time+randomNum+xtname
            fs.rename(oldname,newname,function(err){
                if(err){
                    throw err
                    return
                }
                res.writeHead(200,{"content-type":"text/plain;charset=UTF8"});
                res.end('成功')
            })
            //res.end(util.inspect({fields: fields, files: files}));
        });
        return;
    }
}).listen(3000,'192.168.1.27')


var formidable = require('formidable'),
    http = require('http'),
    util = require('util');
var fs = require("fs");
var sd = require('silly-datetime');
var path = require('path')

http.createServer(function(req, res) {
    if (req.url == '/dopost' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();
        form.uploadDir = "./uploads";

        form.parse(req, function(err, fields, files) {
            var time = sd.format(new Date(), 'YYYYMMDDHHmmss');
            var ran = parseInt(Math.random()*89999+10000)
            var extname = path.extname(files.file.name)
            console.log(extname);
            var oldname = __dirname+'/'+files.file.path
            var newname = __dirname+'/uploads/'+ time+ran+extname
            fs.rename(oldname,newname,function(err){
                console.log(111);
                if(err){
                    console.log(222);
                }
                res.writeHead(200, {'content-type': 'text/plain'});
                res.end("成功");
            })
        });

        return;
    }else if(req.url == '/'){
        fs.readFile('./public/formidable.html',function(err,data){
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        })
    }
}).listen(3000);
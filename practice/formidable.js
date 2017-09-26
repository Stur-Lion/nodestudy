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
                console.log(111);https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=98012088_5_dg&ch=16&wd=360极速浏览器导入谷歌浏览器的标签&rsv_pq=a2c2b97d000015da&rsv_t=50228r55N444poAUtSZwqgebOzEq%2B3bztgUAUj%2Fab6mpvHCiNWuB%2F4KdlEs&rqlang=cn&rsv_enter=1&rsv_sug3=9&rsv_sug1=4&rsv_sug7=100&rsv_sug2=0&inputT=26264&rsv_sug4=27558
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
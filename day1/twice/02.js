/* 02 路由设置 */

var http = require('http');
var fs = require('fs')
var server = http.createServer(function(req,res){
    if(req.url=='/html'){
        fs.readFile('./test/demo.html',function(err,data){
            if(err){
                throw err
                return
            }
            res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
            res.end(data)
        })
    }else if(req.url=='/css'){
        fs.readFile('./test/demo.css',function(err,data){
            if(err){
                throw err
                return
            }
            res.writeHead(200,{"Content-type":"text/css;charset=UTF8"})
            res.end(data)
        })
    }else{
        res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
        res.end('没有内容')
    }
})

server.listen(3000,'192.168.1.27')
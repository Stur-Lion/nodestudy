/* 06 创建服务外的变量不还原 只运行一次*/

var http = require('http');


var a = 100
var server = http.createServer(function(req,res){
    a++;
    res.end(a.toString())
})

server.listen(8080,'192.168.1.27')

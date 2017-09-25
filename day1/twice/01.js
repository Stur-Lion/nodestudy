/* 01 helloe world */
var http = require('http')

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-tye':'text/html;charset=UTF8'})
    res.end('hello world')
})

server.listen(3000,'192.168.1.27')
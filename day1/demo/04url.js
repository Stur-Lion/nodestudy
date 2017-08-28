var http = require('http')
http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/html;charset=UTF8'})
	res.write("<h1>我是一级标题</h1>")
	res.end('ha')
}).listen(3000,"192.168.1.49")
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	if(req.url=='/favicon.ico'){
		return
	}
	fs.stat('./album',function(err,data){
		console.log(data.isFile())//判断是否是文件
		console.log(data.isDirectory())//判断是否是文件夹
	})
	res.end('1')
})
server.listen(3000,"192.168.1.49")
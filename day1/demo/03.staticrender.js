var http = require('http');
var fs = require('fs')
var server = http.createServer(function(req,res){
	if(req.url == "/fang"){
		fs.readFile("./test/fang.html",function(err,data){
			//req表示请求，request;  res表示响应，response
			//设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
			res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
			res.end(data);
		});
	}else if(req.url == "/yuan"){
		fs.readFile("./test/yuan.html",function(err,data){
			//req表示请求，request;  res表示响应，response
			//设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
			res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
			res.end(data);
		});
	}else if(req.url == "/img"){
		fs.readFile("./test/0.jpg",function(err,data){
			//req表示请求，request;  res表示响应，response
			//设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
			res.writeHead(200,{"Content-type":"image/jpg"});
			res.end(data);
		});
	}else if(req.url == "/indexcss"){
		fs.readFile("./css/css.css",function(err,data){
			//req表示请求，request;  res表示响应，response
			//设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
			res.writeHead(200,{"Content-type":"text/css"});
			res.end(data);
		});
	}else{
		res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
		res.end('嘻嘻，没有此网页')
	}
})
server.listen(3000,'192.168.1.49')
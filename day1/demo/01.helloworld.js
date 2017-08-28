// 引用所需功能
var http = require('http');
//创建服务
var server = http.createServer(function (req,res) {
	//res：request   res：respones
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
	res.end("哈哈哈，这是第一个demo");
})
//监听服务;
server.listen(3000,"192.168.1.49");
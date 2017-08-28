var http = require('http');
var url = require('url');
var server = http.createServer(function (req,res) {
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"})
	var queryObj = url.parse(req.url,true).query;
	var name = queryObj.name;
	var age = queryObj.age;
	var sex = queryObj.sex;
	res.end("服务器收到了数据"+name+'-'+age+'-'+sex)
})
server.listen(3000,"192.168.1.49")
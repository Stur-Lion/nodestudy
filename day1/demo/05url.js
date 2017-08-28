var http = require("http");
var url = require("url");

var server = http.createServer(function (req,res) {
	console.log(req.url);
	var path = url.parse(req.url,true);
	console.log(path)
	console.log(111)
	res.end()
});
server.listen(3000,'192.168.1.49')
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req,res) {
	if(req.url=="/favicon.ico"){
		return
	}
	fs.mkdir("./album")
	fs.mkdir("./album/aaa")
	res.end('1')
})
server.listen(3000,"192.168.1.49")

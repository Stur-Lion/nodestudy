var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');



http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
	var pathname = url.parse(req.url).pathname;
	if(pathname=='/'){
		pathname = '/index.html'
	}

	var extendname = path.extname(pathname)
	fs.readFile('./static/'+pathname,function(err,data){
		if(err){
			fs.readFile('./static/404.html',function(err,data){
				res.writeHead(404,{"Content-type":"text/html;charset=UTF8"});
				res.end(data);
			})
			return
		}
		//console.log(extendname);
		getMine(extendname,function(extname){
			res.writeHead(200,{"Content-type":extname});
			res.end(data)
		});


	})

	


}).listen(3000,'192.168.1.49')

function getMine(extname,callback){
	fs.readFile('./mime.json',function(err,data){
		if(err){
			throw err
			return
		}
		var mineData = JSON.parse(data);
		var mine = mineData[extname] || "text/plain"
		callback(mine)
	})
}
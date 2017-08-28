var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req,res) {
	if(req.url=='/favicon.ico'){
		return
	}
	// fs.mkdir('./album/bbb')//创建文件
	fs.readdir('./album/',function(err,files){
		var wenjianjia=[];
		xunhuan(0)
		function xunhuan(i){
			if(i==files.length){
				console.log(wenjianjia);
				return
			}
			fs.stat('./album/'+files[i],function(err,data){
				// console.log(data.isFile())
				if(data.isDirectory()){
					wenjianjia.push(files[i])
				}
				xunhuan(i+1)
			})
		}
	})
	res.end('1')
})
server.listen(3000,"192.168.1.49")
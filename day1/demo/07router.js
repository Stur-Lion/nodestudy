var http = require('http');
var url = require('url');


var server = http.createServer(function (req,res) {
	var myurl = req.url;
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"})
	if(myurl.substr(0,9)=='/student/'){
		var studentID = myurl.substr(9);
		if(/\d{6}/.test(studentID)){
			res.end('您输入的id是'+studentID)
		}else{
			res.end('学生学号位数不对')
		}
	}else if(myurl.substr(0,9)=='/teacher/'){
		var teacherID = myurl.substr(9);
		if(/\d{5}/.test(teacherID)){
			res.end('您输入的id是'+teacherID)
		}else{
			res.end('老师学号位数不对')
		}
	}else{
		res.end('您输入的错误')
	}
})
server.listen(3000,'192.168.1.49')
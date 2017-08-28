/* 07 POST请求*/

var http = require('http');
var querystring = require('querystring')

http.createServer(function(req,res){
    if(req.url=='/dopost'&&req.method.toLowerCase()=='post'){
        var alldate = ''
        req.addListener('data',function(chunk){
            alldate+=chunk
        })

        req.addListener('end',function(){
            console.log(alldate.toString());
            var obj = querystring.parse(alldate.toString())
            console.log(obj);
        })
    }
}).listen(3000,'192.168.1.49')

/* 10 ejs模板引擎*/


var ejs = require('ejs');
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    fs.readFile('./html/ejs.html',function(err,data){
        if(err){
            throw err
        }
        var obj={
            a:12,
            date:['123','456','789']
        }
        var template =  ejs.render(data.toString(), obj)
        res.writeHead(200,{"content-type":"text/html;charset=UTF8"})
        res.end(template)

    })
})

server.listen(3000,'192.168.1.27')


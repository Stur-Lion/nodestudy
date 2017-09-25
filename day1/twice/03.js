/* 03 url */
var http = require('http')
var url  = require('url')
var querystring = require('querystring')
var server = http.createServer(function(req,res){
    if(req.url=='/favicon.ico'){
        return
    }
    var pathname = url.parse(req.url).pathname
    console.log(pathname);
    var query = url.parse(req.url,true).query;
    console.log(query);

    res.end('a')
})

server.listen(3000,'192.168.1.27')
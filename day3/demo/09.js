/* 09 静态资源管理服务*/


var express = require('express');
var app = express();
var fs = require('fs');
var url = require("url");
var paths = require("path");

app.use(function(req,res,next){
    var path = req.originalUrl;
    fs.readFile('./public'+path,function(err,data){
        if(err){
            next();
            return
        }
        var extname = paths.extname(url.parse(req.url).pathname)
        console.log(extname);
        var mine = getMine(extname);
        res.writeHead(200,{"Content-type":mine})
        res.end(data.toString());
    })
});


app.listen(8080)

function getMine(extname){
    switch (extname){
        case ".html":return "text/html";break;
        case ".css":return "text/css";break;
        case ".jpg":return "image/jpg";break;
        case ".js":return "text/js";break;
        case ".png":return "image/png";break;
    }
}


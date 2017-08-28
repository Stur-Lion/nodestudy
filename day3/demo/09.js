/* 09 静态资源管理服务*/


var express = require('express');
var app = express();
var fs = require('fs')

app.use(function(req,res,next){
    var path = req.originalUrl;
    console.log(path);
    fs.readFile('./public'+path,function(err,data){
        if(err){
            next();
            return
        }
        res.send(data.toString());
    })
})


app.listen(8080)


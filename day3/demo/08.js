/* 08 use的使用*/


var express = require('express');
var app  =express();

app.use(function(req,res,next){
    console.log(new Date());
    next()
})

app.use('/public',function(req,res){
    res.write(req.originalUrl+'\n')//url全名
    res.write(req.baseUrl+'\n')//基础名
    res.write(req.path+'\n')//后加
    res.end('hahah')
})


app.listen(8080)


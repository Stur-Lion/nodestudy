/* 01 express简单语法 */

var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.end("hello world")
})

app.get('/teacher',function(req,res){
    res.send("teacher")
})

app.get(/^\/teacher\/([\d]{10})$/,function(req,res){
    res.send("teacher的工号是"+req.params[0])
})


app.listen(8080)
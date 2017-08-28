/* 02 路由 */


var express = require('express');
var app = express();

//app.get('/aaa/:add',function(req,res){
//    var routerName = req.params["add"];
//    if(/[\d]{6}/.test(routerName)){
//        res.send(routerName)
//    }else{
//        res.send('错误')
//    }
//})

app.get('/:abc/:def',function(req,res){
    var firstName = req.params["abc"];
    var senName = req.params["def"];
    res.send(firstName+'-'+senName)
})



app.listen(8080)
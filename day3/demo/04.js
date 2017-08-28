/* 04 使用路由*/

var express = require('express');
var app = express();


app.get('/',function(req,res){
    res.send('测试一')
})

app.get('/:aaa/:bbb',function(req,res){
    var aaa = req.params["aaa"];
    var bbb = req.params["bbb"];
    res.send(aaa+'-'+bbb)
})

app.listen(8080)



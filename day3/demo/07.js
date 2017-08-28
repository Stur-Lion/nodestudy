/* 07 next中间件*/


var express = require('express');
var app = express();


app.get('/:aaa/:bbb',function(req,res,next){
    console.log("bbb");
    if(req.params.aaa=="aaa"&&req.params.bbb=='bbb'){
        res.send('一般登录')
    }else{
        next()
    }
})
app.get('/admin/user',function(req,res){
    console.log("aaa");
    res.send("管理员登录")

})

app.listen(8080)
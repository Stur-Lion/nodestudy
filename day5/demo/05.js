/* 04 seesion */

var express = require('express');
var app = express();
var session = require('express-session')


app.use(session({ //中间件 参数设置
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
app.get('/',function(req,res){
    if(req.session.name){
        res.send('欢迎lion')
    }else{
        res.send('登陆失败')
    }
})
app.get('/login',function(req,res){
    req.session.name='lion';
    res.send('登陆成功')
})

app.listen(8000)
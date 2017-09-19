var express = require('express');
var app = express();
var shuo = require('./router/router.js')
var session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))


//模板引擎级静态资源
app.use(express.static('./public'))
app.set('view engine','ejs')


app.get('/',shuo.showIndex)//进入首页
app.post('/doIndex',shuo.doIndex)//登录
app.post('/outlogin',shuo.outLogin)//退出登录
app.get('/regist',shuo.showRegit)//注册页面
app.post('/doregist',shuo.showRegited)//注册
app.post('/referMess',shuo.referMess)//提交留言
app.get('/allMess',shuo.allMess)//全部说说



















app.listen(8000)
var express = require('express');
var app = express();
var shuo = require('./router/router.js')

//模板引擎级静态资源
app.use(express.static('./public'))
app.set('view engine','ejs')


app.get('/',shuo.showIndex)//进入首页
app.get('/regist',shuo.showRegit)//注册页面
app.post('/doregist',shuo.showRegited)//注册



















app.listen(8000)
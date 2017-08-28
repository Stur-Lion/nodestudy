/* 10 静态资源管理服务*/

var express = require('express');
var app = express();

app.use(express.static('./public'))
//app.use('/jintai',express.static('./public'))


app.listen(8080)

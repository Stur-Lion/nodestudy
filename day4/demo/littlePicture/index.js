/* 相册案例 */

var express= require('express');
var app = express();

var router = require('./controller')

//设置模板引擎
app.set("view engine","ejs")

//中间件 静态文件

app.use(express.static('./public'))



//首页路由
app.get('/',router.shouIndex)
app.get('/:albumname',router.showAlbum)



app.listen(8080)



var express = require('express');
var app = express();

//模板引擎级静态资源
app.use(express.static('./public'))
app.set('view engine','ejs')


//进入首页
app.get('/',function(req,res){
    res.render('login',{

    })
})

//
















app.listen(8000)
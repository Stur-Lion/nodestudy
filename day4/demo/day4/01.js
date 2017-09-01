/* ajax请求数据 */


var express = require('express');
var app = express();

var news_arr=[
    {
        title:'标题一',
        content:'呢容易'
    },
    {
        title:'标题二',
        content:'呜呜呜'
    },
    {
        title:'标题三',
        content:'哈哈哈'
    },
]
app.use(express.static('./public'))
app.get('/news',function(req,res){
    res.json(news_arr)
})



app.listen(8080)
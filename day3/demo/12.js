/* 12 get请求 */


var express =require('express');
var app = express();

app.get('/',function(req,res){
    if(req.url=='/favicon.ico'){
        return
    }
    console.log(req.query);
})
app.listen(8080)
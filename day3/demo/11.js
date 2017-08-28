/* 11 render使用 */


var express =require('express');
var app = express();


app.set("view myviews")
app.set("view engine","ejs");
app.get('/',function(req,res){
    res.render('haha',{
        news:[123,456,123]
    })
})

app.listen(8080)
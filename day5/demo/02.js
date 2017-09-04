/* 02 封装增删改查 */

var express = require('express');
var app = express();
var db = require('./model/db.js');



app.get('/add',function(req,res){
    console.log(5);
    db.add('student',{"name":"cc","age":56},function(err,result){
        if(err){
            console.log(1);
            return
        }
        console.log(6);
        console.log(result);
        res.send('插入成功')
    })
})

app.listen(8080)
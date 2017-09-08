/* 04 cookie */

var express = require('express');
var cookieParser = require('cookie-parser')
var app = express()
app.use(cookieParser())

app.get('/',function(req,res){
    res.cookie('lion','shuai',{
        maxAge: 900000,
        httpOnly: true
    })
    res.send('')
})

app.get('/lion',function(req,res){
    var city = req.query.city;
    var city_arr = req.cookies.lion||[]
    city_arr.push(city)
    res.cookie('lion',city_arr,{
        maxAge: 900000,
        httpOnly: true
    })
    var aa = ''
    for(var i=0;i<city_arr.length;i++){
        aa+=city_arr[i]+'-'
    }
    res.send(aa)
})




app.listen(8000)
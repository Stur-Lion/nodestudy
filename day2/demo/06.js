/* 06相对路径、绝对路径*/


var http= require('http');
var text = require('./text.js')
var fs = require('fs');


fs.readFile(__dirname+'/text.txt',function(err,data){
    if(err){
        throw err
        return
    }
    console.log(data.toString());
})

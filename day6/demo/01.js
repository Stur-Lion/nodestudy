/* 01 首页登录 */


var express = require('express');
var app = express();
var ejs = require('ejs');
var formidable = require('formidable');
var db = require('./model/dbs.js');
var common = require('./model/common.js');

app.use(express.static('./public'))
app.set('view engine','ejs')
app.get('/login',function(req,res){
    res.render('login')
})
app.post('/dopost',function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var data_json={
            name:fields.name,
            password:common.md5(fields.password),
        }
        /*//存入数据库
        db.insertOne('login',data_json,function(){
            console.log('成功插入');
        })*/

        //数据库中查找
        db.find('login',{
            name:fields.name
        },function(err,result){
            console.log(result);
            if(result.length==1){
                if(result[0].password!=fields.password){
                    res.json({retcode:1,info:"密码错误"})
                }else{
                    res.json({retcode:1,info:"登陆成功"})
                }
            }else if(result.length==0){
                res.json({retcode:1,info:"没有此用户"})
            }
        })
    });
})



app.listen(8000)
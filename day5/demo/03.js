/* 03 小小留言本 */

var express = require('express');
var app = express();
var formidable = require('formidable');
var db = require('./model/dbs.js')

app.use(express.static('./public'))


app.post('/addMess',function(req,res){
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
        console.log(fields);
        var ajaxdata = {
            'name':fields.name,
            'mess':fields.mess,
            'time':new Date()
        }
        db.insertOne('ceshi',ajaxdata,function(err,result){
            if(err){
                res.json({retcode:0,info:['失败']})
                return
            }
            res.json({retcode:1,data:ajaxdata,info:['提交成功']})
        })
    });

})

app.post('/allMess',function(req,res){
    var form = new formidable.IncomingForm();

    db.find('ceshi',{},function(err,result){
        res.json({retcode:1,data:result,info:['提交成功']})
    })

})









app.listen(8000)
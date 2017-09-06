/* 03 小小留言本 */

var express = require('express');
var app = express();
var formidable = require('formidable');
var db = require('./model/dbs.js')
var ObjectId = require('mongodb').ObjectID;

app.use(express.static('./public'))


app.post('/addMess',function(req,res){
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
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
app.get('/du',function(req,res){
    var page = req.query.page;
    var form = new formidable.IncomingForm();
    db.find('ceshi',{},{"sort":{"shijian":-1},"pageamount":5,"page":page},function(err,result){
        db.getAllCount('ceshi',function(count){
            var pageNum = parseInt(count/5)+1
            res.json({retcode:1,data:result,pageNum:pageNum,info:['提交成功']})
        })
    })

})
app.get('/shanchu',function(req,res){
    var id = req.query.id
    var form = new formidable.IncomingForm();
    db.deleteMany('ceshi',{_id:ObjectId(id)},function(err,result){
        res.json({retcode:1,data:result,info:['删除成功']})
    })

})









app.listen(8000)
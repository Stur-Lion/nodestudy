var express = require('express')
var app = express();
var formidable = require('formidable'),
    http = require('http'),
    util = require('util');
var db = require('./router/db.js')


app.use(express.static('./public'))
app.post('/insetOne',function(req,res){
    if (req.url == '/insetOne' && req.method.toLowerCase() == 'post') {
    var form = new formidable.IncomingForm();
 
    form.parse(req, function(err, fields, files) {
        db.insertOne('dbinsertOne',fields,function(){
            res.json({retcode:1,info:['插入成功']})
        })
    });
    return;
  }

})
app.post('/deleOne',function(req,res){
    if (req.url == '/deleOne' && req.method.toLowerCase() == 'post') {
        var form = new formidable.IncomingForm();

        form.parse(req, function(err, fields, files) {
            db.deleteOne('dbinsertOne',fields,function(){
                res.json({retcode:1,info:['删除成功']})
            })
        });
        return;
    }

})

app.post('/updateOne',function(req,res){
    if (req.url == '/updateOne' && req.method.toLowerCase() == 'post') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            db.updateOne('dbinsertOne',{name:fields.oldname},{name:fields.newname},function(){
                res.json({retcode:1,info:['修改成功']})
            })
        });
        return;
    }
})

app.post('/all',function(req,res){
    console.log(1);
    if (req.url == '/all' && req.method.toLowerCase() == 'post') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            console.log(fields);
            db.find('dbinsertOne',fields,function(docs){
                res.json({retcode:1,info:docs})
            })
        });
        return;
    }
})








app.listen(8080)
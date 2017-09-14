var formidable = require("formidable");
var db = require("../models/db.js");
var md5 = require("../models/md5.js");
var path = require("path");
var fs = require("fs");
var gm = require("gm");

//首页登录
exports.showIndex=function(req,res){
    res.render('login',{})
}

//注册页面
exports.showRegit = function(req,res){
    res.render('regist',{})
}

//注册
exports.showRegited = function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        console.log(fields);
        db.insertOne('user',fields,function(){
            res.json({data:{},info:['添加成功'],retcode:1})
        })
    });
}


var formidable = require("formidable");
var db = require("../models/db.js");
var md5 = require("../models/md5.js");
var path = require("path");
var fs = require("fs");
var gm = require("gm");

//首页登录页面
exports.showIndex=function(req,res){
    res.render('login',{
        login:req.session.login,
        usernmae:req.session.name,
        active:'login'
    })
}

//登录
exports.doIndex = function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        console.log(fields);
        db.find('user',{
            name:fields.name,
            password:fields.password},
            function(err,result){
                if(err){
                    res.json({data:{},info:['登录失败'],retcode:0})
                }
                console.log(result);
                if(result.length==1){
                    req.session.login=1;
                    req.session.name=fields.name;
                    res.json({data:{},info:['登录成功'],retcode:1})
                }else{
                    res.json({data:{},info:['登录失败'],retcode:0})
                }
            }
        )
    });
}

//退出登录
exports.outLogin=function(req,res){
    req.session.login=0;
    req.session.name='';
    res.json({data:{},info:['退出成功'],retcode:1})
}

//注册页面
exports.showRegit = function(req,res){
    res.render('regist',{
        login:0,
        active:'regist'
    })
}

//注册
exports.showRegited = function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        console.log(fields);
        db.insertOne('user',fields,function(){
            req.session.login=1;
            req.session.name=fields.name;
            res.json({data:{},info:['添加成功'],retcode:1})
        })
    });
}


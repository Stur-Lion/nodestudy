var formidable = require("formidable");
var db = require("../models/db.js");
var md5 = require("../models/md5.js");
var path = require("path");
var fs = require("fs");
var gm = require("gm");

//首页登录页面
exports.showIndex=function(req,res){
    db.find('messList',{'name':req.session.name},function(err,result){
        res.render('login',{
            login:req.session.login,
            usernmae:req.session.name,
            active:'login',
            data:result
        })
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

//提交留言
exports.referMess=function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var data={
            name:req.session.name,
            dataTime:new Date(),
            tite:fields.title,
            content:fields.content
        }
        db.insertOne('messList',data,function(err,result){
            res.json({data:{},info:['留言成功'],retcode:1})
        })
    });
}

//全部说说页面
exports.allMess=function(req,res){
    db.find('messList',{},function(err,result){
        res.render('allMess',{
            login:req.session.login,
            usernmae:req.session.name,
            active:'all',
            data:result
        })
    });
}

//成员列表
exports.userList = function(req,res){
    db.find('user',{},function(err,result){
        res.render('userList',{
            login:req.session.login,
            usernmae:req.session.name,
            active:'userList',
            data:result
        })
    });
}














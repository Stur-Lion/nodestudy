/* 01 数据库复习 */

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


app.get('/',function(req,res){
    var url = 'mongodb://localhost:27017/lion';
    MongoClient.connect(url, function(err, db) {
        if(err){
            console.log("失败");
            return
        }
        assert.equal(null, err);
        console.log("连接成功");
        console.log(db);
        //插入数据
        db.collection('student').insertOne({
            "name":'哈哈',
            "age":parseInt(Math.random()*89+10)
        },function(err,result){
            if(err){
                console.log("失败");
                return
            }
            console.log(result);
            res.send(result)
            db.close();
        })

    });
})

app.listen(8080)
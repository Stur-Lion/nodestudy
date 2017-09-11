var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var collectionurl = require('./collection');

function _connect(callback){
    var url = collectionurl.dblion;
    console.log(url);
    MongoClient.connect(url, function(err, db) {
        if(err){
            console.log("失败");
            return
        }
        console.log("连接成功");
        callback(err,db)
    });

}

//增加
exports.add = function(sqlName,data,callback){
    console.log(2);
    _connect(function(err,db){
        if(err){
            console.log(3);
            return
        }
        console.log(4);
        var collection = db.collection(sqlName);
        collection.insertOne(data,function(err,result){
            callback(err,result)
            db.close();
        })
    })
}





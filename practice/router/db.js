var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
// Connection URL 
var url = 'mongodb://localhost:27017/dbpratice';
// Use connect method to connect to the Server 
function connectMongo(callback){
    MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("链接成功");
    callback(err, db)
});
}

//插入数据
exports.insertOne = function(name,data,callback){ //name,{},callback
    connectMongo(function(err, db){
        var collection = db.collection(name);
        collection.insertOne(data, function(err, result) {
            callback(result);
        });
    })
}

//删除数据
exports.deleteOne = function(name,data,callback){ //name,{},callback
    connectMongo(function(err, db){
        var collection = db.collection(name);
        collection.deleteOne(data,function(err, result) {
            callback(result);
            db.close();
        });
    })
}

//修改数据
exports.updateOne = function(name,olddata,newdata,callback){ //name,{},callback
    connectMongo(function(err, db){
        var collection = db.collection(name);
        collection.updateOne(olddata,newdata, function(err, result) {
            if(err){
                throw err
            }
            callback(result);
            db.close();
        });
    })
}

//查找数据
exports.find = function(name,data,callback){ //name,{},callback
    connectMongo(function(err, db){
        var collection = db.collection(name);
        collection.find(data).toArray(function(err, docs) {
            if(err){
                throw err
            }
            callback(docs);
        });
    })
}


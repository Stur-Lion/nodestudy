var fs = require('fs')

exports.allblums = function(callback){
    fs.readdir('./uplodes',function(err,files){
        if(err){
            throw err
            return
        }
        var allbluma = [];
        (function readFile(i){
            if(i==files.length){
                callback(allbluma)
                return
            }
            fs.stat('./uplodes/'+files[i],function(err,stats){
                if( stats.isDirectory() ){
                    allbluma.push(files[i])
                }
                readFile(i+1)
            })
        })(0)
    })
}
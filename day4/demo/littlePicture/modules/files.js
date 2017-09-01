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

exports.showImage=function(callback,req,res){
    var albumname = req.params.albumname
    var image_arr=[];
    fs.readdir('./uplodes/'+albumname,function(err,files){
        if(err){
            callback(image_arr)
            return
        }
        (function imageName(i){
            if(i==files.length){
                callback(image_arr)
                return
            }
            fs.stat('./uplodes/'+albumname+'/'+files[i],function(err,data){
                if(data.isFile()){
                    image_arr.push(files[i])
                }
                imageName(i+1)
            })
        })(0)
    })
}
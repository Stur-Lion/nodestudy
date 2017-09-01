/* 路由 */
var files = require('../modules/files.js')
exports.showIndex = function(req,res){
    files.allblums(function(allbluma){
        console.log(allbluma);
        res.render('index',{
            allblumas:allbluma
        })
    })
}

exports.showImges = function(req,res){
    if(req.params.albumname=='favicon.ico'){
        return
    }
    files.showImage(function(allbluma){
        console.log(allbluma);
        if(allbluma==[]){
            res.render('404',{

            })
        }else{
            res.render('images',{
                imgesUrl:allbluma
            })
        }
    },req,res)
}




exports.showAlbum = function(req,res){
    res.send("未找到此相册");
}
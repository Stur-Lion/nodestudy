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




exports.showAlbum = function(req,res){
    res.send("相册" + req.params.albumname);
}
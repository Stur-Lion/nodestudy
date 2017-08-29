/* 路由 */

exports.shouIndex = function(req,res){
    res.send("这是首页")
}


exports.showAlbum = function(req,res){
    res.send("相册" + req.params.albumname);
}
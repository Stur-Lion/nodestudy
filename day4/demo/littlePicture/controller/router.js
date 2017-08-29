/* 路由 */

exports.shouIndex = function(req,res){
    res.render('index',{
        date:[132,456,789]
    })
}


exports.showAlbum = function(req,res){
    res.send("相册" + req.params.albumname);
}
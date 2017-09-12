/* 公用js */
var crypto = require('crypto');

exports.md5 = function(data){
    var hash = crypto.createHash('md5');
    var res = hash.update(data).digest('base64');
    return res
}
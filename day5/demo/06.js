/* 06 MD5加密 */

var express = require('express');
var app = express()
var crypto = require('crypto');
var md5 = crypto.createHash('md5');
var password = md5.update('1').digest('base64');
console.log(password);


app.listen(8000)
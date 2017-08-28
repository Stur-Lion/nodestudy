/* 11 homework*/

var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

var server = http.createServer(function(req,res){
    if(req.url=='/favicon.ico'){
        return
    }
    //if(req.url=='/'){
        //读取文件夹
        fs.readdir('./image',function(err,files){
            var dirName=[],dirImage=[];
            function readDirFor(i){
                if(i>=files.length){
                    //读取文件结束
                    console.log(dirName);
                    console.log(dirImage);
                    //读取视图文件
                    fs.readFile('./html/hmework.html',function(err,data){
                        if(err){throw err}
                        var str = data.toString();
                        var ajax_data = {
                            title:'这是标题',
                            dirName:dirName,
                        }
                        var homework_tem = ejs.render(str, ajax_data)
                        res.writeHead(200,{"content-type":"text/html;charset=UTF8"})
                        res.end(homework_tem)
                    })


                    return
                }
                var fileName = files[i];
                fs.stat('./image/'+fileName,function(err,stats){
                    if(err){ throw err}
                    if(stats.isDirectory()){
                        dirName.push(fileName)
                    }
                    readDirFor(i+1)
                })
            }
            readDirFor(0)
        })
    //}
});

server.listen(8080,'192.168.1.27');



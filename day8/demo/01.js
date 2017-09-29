var http = require('http')
var fs = require('fs')
var server = http.createServer(function(req,res){
    if(req.url=='/favicon.ico'){
        return
    }
    if(req.url=='/'){
        fs.readFile('./index.html',function(err,data){
            res.end(data)
        })
    }
})



var io = require('socket.io')(server);
io.on("connection",function(socket){
    $('#aaa').on('click',function(){
        
    })
    console.log("1个客户端连接了");
    socket.on('tijiao',function(mes){
        console.log(mes);
    })
});
server.listen(3000);
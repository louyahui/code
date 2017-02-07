var http = require('http'), 
     fs = require('fs');

http.createServer(function  (req,res) {
    //规范化url,去掉查询字符串、可选的反斜杠，并把它变成小写
    var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
    switch(path){
        case '':
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.write("home");
                res.end();
                break;
        case '/about':
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.write("about");
                res.end();
                break;
        default:
                res.writeHead(404,{'Content-Type':'text/plain'});
                res.write("not found");
                res.end();
                break;                
    }
}).listen(8080,function(){
    console.log('server is running');
})
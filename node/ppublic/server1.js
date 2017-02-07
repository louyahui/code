var http = require('http'), 
     fs = require('fs');

function serverStaticFile (res,path,contentType,responseCode) {
    if (!responseCode) {responseCode = 200};
    fs.readFile(_dirname+path,function  (err,data) {
        if (err) {
            res.writeHead(500,{'Content-Type':'text/plain'});
            res.end('500-Internal Err');
        }else {
            res.writeHead(responseCode,{'Content-Type':'text/plain'});
            res.end(data);
        }
    })
}   
     http.createServer(function (req,res){
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
var fs = require('fs');
var qerystring = require('querystring');

function start(res){
        console.log("fs duqu");
        var body = fs.readFileSync('./post.html')
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(body);
        res.end();
}
function upload(res){
        console.log("fs duqu1");
        //var body = fs.readFileSync('./post.html')
        res.writeHead(200,{"Content-Type":"text/html"});

        res.write('you are'+qerystring.parse(postData).text);
        res.end();
}
exports.start = start;
exports.upload = upload;
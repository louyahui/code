var fs = require('fs');
var qerystring = require('querystring');
var formidable = require('formidable');
function start(res){
        console.log("fs duqu");
        var body = fs.readFileSync('./post_file.html')
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(body);
        res.end();
}
function upload(res,postData){
        console.log("fs duqu1");
        //var body = fs.readFileSync('./post.html')
        var form = new formidable.IncomingForm();
        
        form.parse(res,function  (err,fields,files) {
          res.writeHead(200,{"Content-Type":"text/plain"});
          res.write(util.inspect(fields));
          res.end();
        })     
}
exports.start = start;
exports.upload = upload;
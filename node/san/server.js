var  http = require("http");
var url = require("url");
function start (router,handle) {
    http.createServer(
        function (req,res) {
            var pathname = url.parse(req.url).pathname;
            console.log("请求来自"+pathname);
            var content=router(handle,pathname);
            res.writeHeader(200,{"Content-Type":"text/plain"});
              res.write(content);
              res.end();
        }).listen(8080,function () {
        console.log("server is  rnning")
    })
    }
    exports.start  = start;
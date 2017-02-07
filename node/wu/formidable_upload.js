var formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    fs = require('fs');


http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });

    return;
  }

  // show a file upload form
  var content = fs.readFileSync('./post_file.html');
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(content );
}).listen(8080);
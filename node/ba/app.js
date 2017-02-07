var express = require('express');
var path = require('path');
var app = express();
app.use(express.static('public'));
app.set('views',path.join(__dirname,'views'));
app.set('view engin')
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {

  console.log('30000');
});

var server = require('./server');
var router = require('./router');
//var  requestHandle = require('./requestHandlers');
var requestHandle = require('./uploadHandlers')
var  handle = {};
handle["/"] = requestHandle.start;
handle["/start"] = requestHandle.start;
handle["/upload"] = requestHandle.upload;
server.start(router.router,handle);
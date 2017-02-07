var http = require('http');
var fs = require('fs')
http.get('http://www.baidu.com',function  (response) {
    //console.log(response);
    //console.log(response);
    response.setEncoding('utf-8')
    response.on('data',function  (data) {
    //console.log(data);
    //讲响应网站数据写入文件
    fs.appendFile('baidu.html',data)   
    })
})
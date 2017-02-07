var http = require('http');
var cheerio = require('cheerio');
var fs = require('fs');
var request = require('request');
var iconv = require('iconv-lite')

var url = 'http://book.zongheng.com/chapter/189169/3431546.html';
function  myrequest(url,callback) {
    var options={
        url:url,
        encoding:null
    }
   request(options,callback)
}
function getcontent (url) {
   myrequest(url,function  (error,response,body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        var html = iconv.decode(body,'gb2312');
        var $= cheerio.load(html);
        var content = $('#uiViewPanel > div.bg_color > div > div > div > div > div').text();
        var urlPrev = $('a#nextChapterButton').attr('href');
        //console.log(content);
        fs.appendFile('zongheng.html',content);
        getcontent(urlPrev);
    };
 })
}
getcontent(url);

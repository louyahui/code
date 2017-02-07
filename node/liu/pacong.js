var http = require('http');
var cheerio = require('cheerio');
var fs = require('fs');
var request = require('request');
var iconv = require('iconv-lite');
var mongoose = require('mongoose');

//打开数据库连接
mongoose.connect('mongodb://localhost/book');
//注册scema
var Schema = mongoose.Schema;
var  textSchema = new Schema({
    content:String
})
var Text = mongoose.model('text',textSchema)
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
        var html = iconv.decode(body,'utf-8');
        var $= cheerio.load(html);
        var content = $('#uiViewPanel > div.bg_color > div > div > div > div > div').text();
        var text = new Text();
        text.content = content;
        text.save(function (error) {
            if (error) {
                console.log(err);
                return ;
            }else{
                console.log('succed mongoose')
            }
        })
        
        var urlPrev = $('a#nextChapterButton').attr('href');
        //console.log(content);
        fs.appendFile('zongheng.html',content);
        getcontent(urlPrev);
    };
 })
}
getcontent(url);

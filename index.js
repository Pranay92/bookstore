var fs = require('fs'),
    http = require('http'),
    url = require('url'),
    bookUtils = require('./utils/books');

var server = http.createServer(function(req,res){
  bookUtils.search(url.parse(req.url,true),res);
});

server.listen(8000);


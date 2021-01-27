var http = require('http');
var fs = require('fs');
var url = require('url');
var server = new http.Server();
server.listen(4200, '127.0.0.1');
server.on('request', function(req, res){
    var urlParsed = url.parse(req.url, true);
    console.log(urlParsed);
    console.log(req.headers);
    if(urlParsed.pathname == './img'){
        fs.readFile("img.jpeg", function(err, data){
            if(err){
                console.error(err.message);
            }else{
                res.end(data);
            }
        });
    }
    if(urlParsed.pathname == './otherimg'){
        fs.readFile("otherimg.jpg", function (err, data){
            if(err){
                console.error(err.message);
            }else{
                res.end(data);
            }
        });
    }
    if(urlParsed.pathname == '/content'){
        fs.readFile("content.txt", {encoding: 'utf-8'}, function(err, data){
            if(err){
                console.error(err.message);
            }else{
                res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
                res.setHeader("Access-Control-Allow-Credentials", "true");
                res.setHeader("Access-Control-Allow-Headers","Origin, Content-Type, X-Auth-Token, Authorization");
                res.end(data);
            }
        });
    }
});
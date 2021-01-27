var http = require('http');
var fs = require('fs');

var server = new http.Server();
server.listen(3000, '127.0.0.1');
server.on('request', function(req, res){
    res.setHeader('content-type', 'text/html');
    fs.readFile("index.html", {encoding: 'utf-8'}, function(err, data){
        if(err){
            console.error(err.message);
        }else{
            res.end(data);
        }
    });
});
var http = require('http');
var fs = require('fs');
var app = http.createServer(function(req, res) {
    var url = req.url;
    if (url == '/') {
        url = '/index.html';
    }
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + url));
});

app.listen(3000);
console.log("Server Started!!");
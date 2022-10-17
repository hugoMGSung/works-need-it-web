var http = require('http');

http.createServer(function(request, response){
    /* HTTP 헤더 전송 / Content Type: text/plain
    */
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello, Node,js\n');
}).listen(8080);

console.log('Server running on http://127.0.0.1:8080');
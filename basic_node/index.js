var http = require('http');
var fs = require('fs');
var url = require('url');

/* 웹서버 생성 */
http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname; // URL 파싱
    console.log(`${pathname} 에 대한 요청 수신!`);

    // 파일이름이 비어있을때
    if (pathname == '/') {
        pathname = '/index.html';
    }

    fs.readFile(pathname.substring(1), function(err, data) {
        if (err) {
            console.error(err); 
            response.writeHead(404, {'Content-Type':'text/html'});
        } else {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(data.toString()); // responseBody에 작성
        }
        response.end(); // 전송
    })
}).listen(8080);

console.log('Server running on http://127.0.0.1:8080');
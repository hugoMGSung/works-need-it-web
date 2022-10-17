var express = require('express');
var app = express();
/* router모듈 main.js 로드 후 app에 전달 */
var router = require('./router/main')(app);

// 서버가 읽을수 있도록 HTML위치 설정
app.set('views', `${__dirname}/views`);
/* HTML렌더링 엔진으로 ejs 사용 */
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile);

var server = app.listen(8080, function() {
    console.log('Express server started on http://127.0.0.1:8080');
});

// app.get('/', function(request, response) {
//     response.send('Hello Express!!');
// });
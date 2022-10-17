/* events 모듈 사용 */
var events = require('events');

// EventEmitter 객체 생성
var eventEmitter = new events.EventEmitter();

// 이벤트핸들러 함수 생성
var connectHandler = function connected() {
    console.log('연결 성공');    
    // data_recevied 이벤트를 발생시키기
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

// data_received 이벤트와 익명 함수와 연동
eventEmitter.on('data_received', function(){
    console.log('데이터 받음!');
});

eventEmitter.emit('connection');

console.log('프로그램 종료!');
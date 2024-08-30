var fs = require('fs');

var data = fs.readFileSync('sample.txt');

console.log(data.toString());
console.log('프로그램 종료!');
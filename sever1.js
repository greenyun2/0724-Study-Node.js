// 서버 만들기
const http = require('http');
const { error } = require('console');
const { charsets } = require('mime');

// createServer((요청, 응답)) 서버 만들어주는 함수, 콜백함수 (요청, 응답)매개변수
const sever1 = http
.createServer((req, res) => {
  // 응답
  // writeHead() => 정상적인 값이 들어온다면 타입정의
  res.writeHead(200, {"Content-type" : "text/html; charset=utf-8" });
  res.write('<h1>Hello Node</h1>');
  res.write('<p>Hello sever</p>');
  res.end('<p>Hello King Js</p>');
  // listen : 특정포트로 요청이 온다면 콜백함수 실행 (예비실행문)
}).listen(8081);
sever1.on('listening', () => {
  console.log('8081번 포트에서 서버 대기 중입니다.');
});
sever1.on('error', () => {
  console.log(error);
});
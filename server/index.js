// //fishing.js

// //localhost:3001
// //안녕하세요 피싱사이트입니다.

const http = require("http");

// // 서버 객체 생성
// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/plain; charset=utf-8");
//   res.end("안녕하세요 피싱사이트입니다.");
// });

// // 서버 실행
// server.listen(3000, "localhost", () => {
//   console.log("서버 시작: http://localhost:3000");
// });

// const s2 = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "application/json; charset=utf-8");
//   res.end(JSON.stringify({ name: "공자", age: "death", hobbies: ["똑독함"] }));
// });

// s2.listen(3002, "localhost", () => {
//   console.log("서버시작 http://localhost:3002");
// });

const s3 = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  if (req.url == "/coffee") {
    res.end("노자");
  } else {
    res.end("공자");
  }
});

s3.listen(3003, "localhost", () => {
  console.log("s3 서버 따까리 시작 http://localhost:3003");
});

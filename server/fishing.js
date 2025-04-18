const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end("자왈 <h1 style='color:blue'>성상근야 습상원야</h1>");
});

server.listen(3001, "localhost", () => {
  console.log("서버시작 http://localhost:3001");
});

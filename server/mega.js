const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/coffee") {
    res.setHeader("Content-Type", "application/json; charset=utf-8");

    res.end(
      JSON.stringify({ name: "아메리카노", name: "latte", name: "maxim " })
    );
  } else if (req.url === "/cookie") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1 style='color:blue'>쿠키</h1>");
  } else {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1 style='color:blue'>메가커피 이랏샤이마세</h1>");
  }
});

server.listen(3000, () => {
  console.log(" 실행 중입니다");
});

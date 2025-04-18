const express = require("express");
const app = express();
app.use(express.text());

app.get("/coffee", (req, res) => {
  res.send("it 커피");
});

app.get("/cookie", (req, res) => {
  res.json({ name: "포로쿠키", hp: 300 });
});

app.get("/bread", (req, res) => {
  const { query } = req;
  const { size, count } = query;
  res.send(`${count} 갯수의 ${size}인 빵이 나왔습니다.`);
});

app.post("/jelly", (req, res) => {
  console.log(req.body);
  res.json({ test: true });
});

app.post("/boardgame", (req, res) => {
  console.log(`name:${req.body} 꿀잼`);
  res.json({ test: true });
});
app.listen(3000, () => {
  console.log("시작함");
});

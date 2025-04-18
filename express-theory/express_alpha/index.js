const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

app.get("/", (req, res) => {
  res.send("하이루");
});

app.get("/send/b", (req, res) => {
  res.send("<h1>하3루</h1>");
});

app.get("/send/c", (req, res) => {
  res.send({ text: "하이루" });
});

app.get("/json/a", (req, res) => {
  res.json({ msg: "하이요" });
});

app.get("/json/b", (req, res) => {
  res.status(404).send("<h1>그런 페이징 없음</h1>");
});

app.get("/file", (req, res) => {
  res.set({ ronaldo: "siu" });
});

app.get("/cookie/:id", (req, res) => {
  const { id } = req.params;
  res.render(__dirname + "/views/cookie", { id });
});

app.listen(3000, () => {
  console.log("서버 가동 준비완료 http://localhost:3000/");
});

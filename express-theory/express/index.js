const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("딸기");
});
app.get("/coke", (req, res) => {
  res.send("아오오니");
});
app.listen(3000, () => {
  console.log("시작함");
});

app.get("/cookie", (req, res) => {
  const { size, liter } = req.query;
  console.log(query);
  res.send(`사이즈는 ${size}이고 용량은 ${liter}입니다.`);
});

app.get("/lemon", (req, res) => {
  res.send("매우 신 레몬");
});

app.get("/major", (req, res) => {
  const major = [
    { name: "사회과학대", majors: ["경영", "경제", "통계"] },
    { name: "인문학대", majors: ["국어", "영어", "일어"] },
    { name: "자연과학대", majors: ["물리", "화학", "천문"] },
    { name: "노인학대", majors: ["이지헌", "균케이"] },
  ];

  const { query } = req;
  const { name } = query;

  console.log(query);

  const target = major.find((v) => v.majors.some((x) => x == name));
  res.send(`${name} 학과는 ${target.name}`);
});

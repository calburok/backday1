const express = require("express");
const app = express();

app.use(express.json()); // req.body 파싱

const ring = (req, res, next) => {
  console.log("띵똥");
  if (req.query.name === "master") {
    return res.json({ name: "사장님 피자" });
  }
  next();
};

const hasName = (req, res, next) => {
  console.log("hasName 실행됨");
  if (!req.body.name) {
    return res.status(400).json({ error: "이름이 필요합니다" });
  }
  next();
};

const bemin = (req, res, next) => {
  console.log("배달의 민족 주문");
  next();
};

// 미들웨어 등록 순서 중요
app.use(ring);
app.use(bemin);

// GET 요청
app.get("/pizza", (req, res) => {
  res.json({ name: "마르게리타" });
});

// POST 요청 - hasName만 이 라우터에서 사용
app.post("/pizza", hasName, (req, res) => {
  res.json({ name: `${req.body.name}님을 위한 마르게리타 피자` });
});

app.listen(3002, () => {
  console.log("서버 실행 중: http://localhost:3002");
});

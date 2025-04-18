const express = require("express");
const { cats } = require("../data/dog.js");
const catRouter = express.Router();
//json으로 받겠다는 뜼

catRouter.get("/", (req, res) => {
  res.json(cats);
});

catRouter.post("/", (req, res) => {
  const newCat = req.body;
  console.log("받은 데이터:", newCat);

  cats.push(newCat); // dog.js 파일에서 불러온 배열에 추가
  res.json({ added: newCat }); // 클라이언트에게 응답
});

module.exports = catRouter;

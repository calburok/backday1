const express = require("express");
const dogRouter = express.Router();
const { dogs } = require("../data/dog.js");

dogRouter.get("/", (req, res) => {
  const { minage = 0, maxage = 100, gender } = req.query;
  const data = dogs
    .filter((v) => +minage <= v.age && v.age <= +maxage)
    .filter((v) => !gender || v.gender === gender);
  res.json(data);
});

dogRouter.get("/:id", (req, res) => {
  res.json(dogs[req.params.id]);
});

dogRouter.post("/", (req, res) => {
  const newDog = req.body;
  console.log("받은 데이터:", newDog);

  dogs.push(newDog); // dog.js 파일에서 불러온 배열에 추가
  res.json({ added: newDog }); // 클라이언트에게 응답
});

module.exports = dogRouter;

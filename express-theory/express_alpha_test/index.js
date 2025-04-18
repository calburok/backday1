const express = require("express");
const app = express();
app.get("/coffee", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/views/coffee.html");
});

app.get("/bread", (req, res) => {
  res.status(200).json([
    { name: "소금빵", price: 3000 },
    { name: "바게트", price: 5000 },
    { name: "케이빵", price: 13000 },
  ]);
});

app.listen(3002, () => {
  console.log("서버가동 완료 http://localhost:3000/");
});

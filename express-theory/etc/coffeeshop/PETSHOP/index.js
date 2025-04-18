const express = require("express");
const app = express();
const dogRouter = require("./routes/dogRoute.js");
const catRouter = require("./routes/cateRoute.js");

app.use(express.text());
app.use(express.json()); //json으로 받겠다는 뜼
app.use("/dogs", dogRouter);
app.use("/cats", catRouter);

//웹 서버
app.get("/mega/:name", (req, res) => {
  const { name } = req.params;
  res.render();
});
app.listen(3002, () => {
  console.log("펫샵오픈");
});

const express = require("express");
const app = express();
const { carsRouter } = require("./routes/carsRouter");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/cars", carsRouter);

app.listen(3000, () => {
  console.log("서버실행");
});

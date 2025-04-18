const express = require("express");
const productRouter = require("./Router/Router.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productRouter);

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ error: "잘못된 입력값 형식임." });
  }
  next();
});
app.listen(3000, () => {
  console.log("클라이언트 실행 중: http://localhost:3000/products");
});

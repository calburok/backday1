const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();
const express = require("express");
const app = express();
app.use(express.json());
app.get("/product", async (req, res) => {
  const data = await prisma.product.findMany();
  res.json(data);
});

app.listen(3000, () => {
  console.log("http://localhost:3000/product");
});

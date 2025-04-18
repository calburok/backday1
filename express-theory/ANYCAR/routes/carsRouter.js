//라우터 만들고 자동차

const express = require("express");

const { carService } = require("../services/carService.js");
const { cars } = require("../data/cars.js");
const { validateCarData } = require("../middleware/validator.js");
const carsRouter = express.Router();

carsRouter.get("/", (req, res) => {
  res.json(carService.getAll());
});

carsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const car = carService.getById(id);
  if (!car)
    return res.status(404).json({ success: false, message: "그런 차 없음" });
  res.json();
  failResponse(res, 404, success, (message = "그런 차 없음"), code, details);
});

carsRouter.post("/", validateCarData, (req, res) => {
  carService.createCar(id, name);
  res.json({ success: true, massage: "차량 등록 완료" });
});

carsRouter.put("/", (req, res) => {
  const result = carService.update(req.body);
  if (!result)
    res.status(404).json({ success: false, message: "그런 차 업음" });
  res.json({ success: true, message: "차업데이트됨" });
});

carsRouter.delete("/", (req, res) => {
  const { id } = req.body;
  const result = carService.deleteCar(id);
  if (!result)
    res.status(404).json({ success: false, message: "그런 차 업음" });
  res.json({ success: true, massage: "차량 삭제 완료" });
});
module.exports = { carsRouter };

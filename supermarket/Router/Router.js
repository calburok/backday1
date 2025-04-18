const express = require("express");
const productRouter = express.Router();
const service = require("../service/service");
const { validateBody, validateId } = require("../middleware/validate");

productRouter.get("/", async (req, res) => {
  const alldata = await service.getAll();
  res.json(alldata);
});

productRouter.get("/:id", validateId, async (req, res) => {
  const getIdData = await service.getId(req.params.id);
  res.json(getIdData);
});

productRouter.post("/", validateBody, async (req, res) => {
  const createData = await service.create(req.body);
  res.json({ message: "추가완료요", success: createData });
});

productRouter.put("/:id", validateId, validateBody, async (req, res) => {
  const updateData = await service.update(req.params.id, req.body);
  res.json({ message: "수정완료요", success: updateData });
});

productRouter.delete("/:id", validateId, async (req, res) => {
  const deleteData = await service.delete(req.params.id);
  res.json({ message: "삭제완료오", success: deleteData });
});

module.exports = productRouter;

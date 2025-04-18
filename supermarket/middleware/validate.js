const service = require("../service/service.js");

const validateBody = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "이름은 문자여야 합니다." });
  }

  if (price == undefined || typeof +price !== "number") {
    return res.status(400).json({ error: "가격은 숫자여야 합니다." });
  }

  next();
};

const validateId = async (req, res, next) => {
  const id = req.params.id;

  if (!id || isNaN(id)) {
    return res.status(400).json({ error: "유효하지 않은 id입니다." });
  }

  try {
    const exist = await service.getId(id);
    if (!exist) {
      return res.status(404).json({ error: "존재하지 않는 id입니다." });
    }
    next();
  } catch (err) {
    res.status(500).json({ error: "서버 에러" });
  }
};

module.exports = { validateId, validateBody };

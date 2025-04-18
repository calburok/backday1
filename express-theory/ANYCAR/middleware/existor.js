const { carService } = require("../services/carService");

const exister = (req, res, next) => {
  const { id } = req.params;
  const car = carService.getById(id);
  if (!car) {
    return res.status(404).json({
      success: false,
      message: "해당차량이 존재하지 않습니다.",
    });
  }
  next();
};
module.exports = { exister };

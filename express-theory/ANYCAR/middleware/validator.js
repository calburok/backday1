const validateCarData = (req, res, next) => {
  //id, name 데이터 타당성 체크
  if (!req.body)
    return res.status(400).json({ success: false, massage: "body값 필수" });

  const { id, name } = req.body;

  if (!id || !name)
    res.status(404).json({ success: false, massage: "모든 필드는 필수" });

  if (!id.trim() || !name.trim())
    return res
      .status(404)
      .json({ success: false, message: "id와 name은 빈 값 일 수 없습니다." });

  const idRegex = /^[0-9]{4}[가-힣]$/; //4자리 숫자와 한글 하나
  if (!idRegex.test(id))
    res.status(404).json({ success: false, message: "id 형식이 안맞음" });

  next();
};

module.exports = { validateCarData };

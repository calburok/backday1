const successResponse = (
  res,
  statusCode = 200,
  message = `로딩완료`,
  data = {}
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const failResponse = (
  res,
  statusCode = 404,
  message = "Fail",
  code = "실패",
  details = "요청이 실패했습니다."
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: {
      code,
      details,
    },
  });
};

module.exports = {
  failResponse,
  successResponse,
};

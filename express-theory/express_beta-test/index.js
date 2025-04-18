const { students } = require("./students.js");
const express = require("express");
const { successResponse, failResponse } = require("./utils/response.js");
const app = express();
app.use(express.json());

// 학생 상세 조회
app.get("/students/:id", (req, res) => {
  const { id } = req.params;
  const targetStudent = students.find((v) => v.id == +id);
  if (!targetStudent) {
    failResponse(res, 404, `id ${id} 학생의 데이터를 찾을 수 없습니다`);
  } else {
    successResponse(res, 200, `id ${id} 학생의4 데이터`, targetStudent);
  }
});

// 전체 학생 목록
app.get("/students", (req, res) => {
  successResponse(res, 200, "학생 데이터", students);
});

// 학생 삭제
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  const index = students.findIndex((v) => v.id == +id);

  if (index === -1) {
    failResponse(res, 404, `id ${id} 학생의 데이터를 찾을 수 없습니다`);
  } else {
    const deleted = students.splice(index, 1)[0];
    successResponse(res, 200, "학생 삭제됨", deleted);
  }
});

app.listen(3000, () => {
  console.log("서버 실행 중: http://localhost:3000");
});

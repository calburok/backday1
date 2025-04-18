const kr = require("korean-name-generator");
const Excel = require("exceljs");

// Excel.workbook 대신 workbook 변수를 직접 선언
const workbook = new Excel.Workbook();
const workSheet = workbook.addWorksheet("1");

const rows = Array(10000)
  .fill(0)
  .map((v, i) => [i, kr.generate(i % 2)]);

// 여러 행을 추가할 때는 addRows()를 사용하는 것이 좋습니다.
workSheet.addRows(rows);

workbook.xlsx.writeFile("users.xlsx").then(() => console.log("완료"));

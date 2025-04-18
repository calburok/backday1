const ExcelJS = require("exceljs");

const excel = new ExcelJS.Workbook(); // 엑샐 생성
const sheet = excel.addWorksheet("베스킨라빈스");

sheet.addRow(["name", "price", "kcal", "ingredient", "rank"]);

excel.xlsx.writeFile("test.xlsx");

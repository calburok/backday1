const ExcelJS = require("exceljs");

const workbook = new ExcelJS.Workbook();

workbook.xlsx.readFile("aircon.xlsx").then(() => {
  const day3 = workbook.getWorksheet("4"); // '3'번 시트 (시트 이름이 '3'일 경우)
  const newArr = [];

  day3.eachRow((v) => {
    if (v.values.some((v) => v == "수당률")) {
      const { values } = v;
      const cellArr = [];

      values.forEach((cell, index) => {
        if (index < 3) return;
        else if (cell.richText) {
          const plainText = cell.richText.map((seg) => seg.text).join("");
          cellArr.push(plainText);
        } else {
          cellArr.push(cell);
        }
      });
 
      const data = [...new Set(cellArr)];

      console.log(data);
      const obj = {
        name: data[0],
        rate: data[2],
        revenue: data[3].result || 0,
        income: data[2] * (data[3].result || 0),
      };
      ne wArr.push(obj);
    }
  });
});
  
const ExcelJS = require("exceljs");

const excel = new ExcelJS.Workbook(); // 엑샐 생성
const sheet = excel.addWorksheet("베스킨라빈스");
const sheet1 = excel.addWorksheet("한국 사람");

sheet.addRow(["name", "price", "kcal", "ingredient", "rank"]);
sheet.addRow(["피치 요거트", "4000", "221", "우유", "1"]);
sheet.addRow(["망고 탱고", "4000", "238", "우유", "5"]);
sheet.addRow(["민트 블리스", "4000", "283", "우유", "2"]);
sheet.addRow(["초콜릿 칩", "4000", "268", "우유", "3"]);
sheet.addRow(["아이스 그린티 킷캣", "4000", "275", "우유, 대두, 밀", "4"]);

const namer = require("korean-name-generator");

// 1000개의 이름 데이터를 생성 (여기서는 남자 이름만 예시)
const names = Array.from({ length: 1000 }, () => namer.generate(true));
const country = [
  "경기도",
  "강원도",
  "충청도",
  "전라도",
  "경상도",
  "제주도",
  "서울",
  "부산",
];

sheet1.addRow(["name", "age", "country"]);
names.map((v) => {
  return sheet1.addRow([
    `${v}`,
    `${Math.floor(Math.random() * 75) + 5}`,
    `${country[Math.floor(Math.random() * 8)]}`,
  ]);
});

excel.xlsx.writeFile("test.xlsx");

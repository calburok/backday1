const fs = require("fs");

// 런타임 에러
// 파일 연결, 네트워크 연결 (api)
// try - catch를 써서 프로그램 정상 작동화 시킴

// try {
//   const data = fs.readFileSync("coffee3.txt", "utf-8");

//   console.log(data);
// } catch (e) {
//   console.log(e);
//   console.log("균케이 없음");
// }

// try {
//   console.log("마사지 시작");
//   throw new Error("균케이 gg");
// } catch (e) {
//   console.log(e, e.message);
// }

const divide = (a, b) => {
  if (b == 0) throw new Error("0으로 못나눔");
  return a / b;
};

try {
  divide(10, 3);
  divide(10, 0);
} catch (e) {
  console.log(e, e.message);
}

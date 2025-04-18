const fs = require("fs");

// 런타임 에러
// 파일연결, 네트워크연결(api), 디비연결
// try - catch를 써서 프로그램 정상 작동화 시킴

// try {
//   const data = fs.readFileSync("coffee1234.txt", "utf-8");
//   console.log(data);
// } catch (e) {
//   console.log(e);
//   console.log("그런 파일 없음");
// }

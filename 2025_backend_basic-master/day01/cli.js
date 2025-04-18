//cli.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("두유 월드 카페 오신걸 환영합니다~!");
console.log("1. 주문하기");
console.log("2. 포장하기");
console.log("3. 종료하기");

rl.question("번호 고르세요.", (answer) => {
  if (+answer == 1) console.log("주문 시작!");
  else if (+answer == 2) console.log("포장 시작");
  else if (+answer == 3) console.log("종료 ㅂㅂ");
  else console.log("에러");
  rl.close();
});

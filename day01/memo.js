//program
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const fs = require("fs");
const randomArray = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 10000)
);

r1.question("폴더 이름 입력", (answer) => {
  r1.question("폴더 개수 입력", (answer2) => {
    for (let i = 0; i < answer2; i++) {
      fs.mkdirSync(answer + i);
    }
  });
});

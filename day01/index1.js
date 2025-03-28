const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("최애 포켓몬은?", (answer) => {
  console.log("가장 좋아하는 포켓몬은:" + answer);
});

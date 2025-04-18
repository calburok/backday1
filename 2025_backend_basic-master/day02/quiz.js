const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => new Promise((success) => rl.question(query, success));
const main = async () => {
  const name = await askQuestion("폴더 이름:");
  const count = await askQuestion("갯수 입력");
  Array(+count)
    .fill(0)
    .forEach((v, i) => fs.mkdirSync(name + i));
  rl.close();
};

main();

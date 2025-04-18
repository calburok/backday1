const fs = require("fs");
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) =>
  new Promise((resolve) => r1.question(query, resolve));

const initializeData = () => {
  if (fs.existsSync("doyou.json")) {
    const data = fs.readFileSync("doyou.json", "utf-8");

    return JSON.parse(data);
  } else {
    const initData = {
      coffeeMenu: [
        { name: "아메리카노", stock: 0, price: 3000 },
        { name: "우유라떼", stock: 0, price: 4000 },
        { name: "두유라떼", stock: 0, price: 5000 },
      ],
      total: 0,
    };

    fs.writeFileSync("doyou.json", JSON.stringify(initData), "utf-8");
    const data = fs.readFileSync("doyou.json", "utf-8");
    return JSON.parse(data);
  }
};

module.exports = { askQuestion, initializeData };

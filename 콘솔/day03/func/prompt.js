const readline = require("readline");
const { Coffee } = require("./coffee.js");
const { env } = require("../data/env.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) =>
  new Promise((success) => rl.question(query, success));
const fs = require("fs");
const initializeData = () => {
  if (fs.existsSync(env.datastore)) {
    const data = fs.readFileSync(env.datastore, "utf-8");
    const obj = JSON.parse(data);
    const { coffeeMenu } = obj;
    const newData = coffeeMenu.map((v) => new Coffee(v.name, v.stock, v.price));
    return newData;
  } else {
    const initData = {
      coffeeMenu: [
        { name: "아메리카노", stock: 0, price: 3000 },
        { name: "우유라떼", stock: 0, price: 3500 },
        { name: "두유라떼", stock: 0, price: 4000 },
      ],
    };
    fs.writeFileSync(env.datastore, JSON.stringify(initData), "utf-8");
    const data = fs.readFileSync(env.datastore, "utf-8");
    return JSON.parse(data);
  }
};

//export 문법
module.exports = { askQuestion, initializeData };

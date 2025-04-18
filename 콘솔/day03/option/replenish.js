const { askQuestion } = require("../func/prompt.js");
const { env } = require("../data/env.js");
const { Option } = require("./option");
const fs = require("fs");

class ReplenishOption extends Option {
  async execute(data) {
    console.log("재고 채우기 시작!");
    data.forEach((v) => v.introduce());
    const menu = await askQuestion("번호 입력:");
    const amount = await askQuestion("몇개 추가:");
    data[+menu].addStock(+amount);
    const saveData = { coffeeMenu: data.map((v) => v.makeObj()) };
    fs.writeFileSync(env.datastore, JSON.stringify(saveData), "utf-8");
    console.log("재고 업데이트 완료!");
  }
}
module.exports = { ReplenishOption };

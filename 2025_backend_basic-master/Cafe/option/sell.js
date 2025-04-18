const { Option } = require("./option.js");

class SellOption extends Option {
  async execute(data) {
    console.log("판매하기 시작!");
  }
}

module.exports = { SellOption };

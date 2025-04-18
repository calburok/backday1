const { Option } = require("./option");

class SellOption extends Option {
  async execute(data) {
    console.log("판매하기 시작!");
  }
}
module.exports = { SellOption };

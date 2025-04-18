const { Option } = require("./option");

class SettlementOption extends Option {
  async execute(data) {
    console.log("3.금일 정산");
  }
}
module.exports = { SettlementOption };

const { Option } = require("./option");

class ExitOption extends Option {
  async execute(data) {
    console.log("시스템 종료 ㅂㅂ");
  }
}

module.exports = { ExitOption };

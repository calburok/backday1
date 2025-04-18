const { Option } = require("./option");

class InvalidOption extends Option {
  async execute(data) {
    console.log("입력이 잘못됨");
  }
}

module.exports = { InvalidOption };

const { Option } = require("./option.js");

class InvalidOption extends Option {
  async execute(data) {
    console.log("그런 숫자 없음");
  }
}
module.exports = { InvalidOption };

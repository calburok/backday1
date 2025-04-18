const { SellOption } = require("./sell.js");
const { ReplenishOption } = require("./replenish.js");
const { SettlementOption } = require("./settlement.js");
const { ExitOption } = require("./exit.js");
const { managers } = require("../manager/base.js");

const menuOption = {
  1: new SellOption(),
  2: new ReplenishOption(managers.inveuntory, managers.prompt, managers.data),
  3: new SettlementOption(),
  4: new ExitOption(),
};

module.exports = { menuOption };

const { ExitOption } = require("./exitoption");
const { ReplenishOption } = require("./replenish");
const { SellOption } = require("./sell");
const { SettlementOption } = require("./settlement");

const menuOption = {
  1: new SellOption(),
  2: new ReplenishOption(),
  3: new SettlementOption(),
  4: new ExitOption(),
};

module.exports = { menuOption };

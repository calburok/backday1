class Coffee {
  #name;
  #stock;
  #price;

  constructor(name, stock, price) {
    this.#name = name;
    this.#stock = stock;
    this.#price = price;
  }

  addStock() {
    this.#stock += stock;
  }

  substractStock(stock) {
    this.#stock -= stock;
  }

  getPtice() {
    return this.#price;
  }
}
module.exports = { Coffee };

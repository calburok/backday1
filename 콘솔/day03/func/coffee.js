class Coffee {
  #name;
  #stock;
  #price;
  constructor(name, stock, price) {
    this.#name = name;
    this.#stock = stock;
    this.#price = price;
  }

  introduce() {
    console.log(`${this.#name} ${this.#stock}`);
  }
  addStock(stock) {
    this.#stock += stock;
  }
  substractStock(stock) {
    this.#stock -= stock;
  }
  getPrice() {
    return this.#price;
  }
  makeObj() {
    return { name: this.#name, stock: this.#stock, price: this.#price };
  }
}
module.exports = { Coffee };

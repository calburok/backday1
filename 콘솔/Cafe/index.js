const fs = require("fs");
const { askQuestion, initializeData } = require("./prompt");

class CoffeeShop {
  constructor() {
    this.data = initializeData();
  }

  displayMenu() {
    console.log(`1.판매하기  2.재고 채우기 3.금일 정산 4.시스템 종료  `);
  }

  showCoffeeList() {
    this.data.coffeeMenu.forEach((v, i) => {
      console.log(`${i}: ${v.name}`);
    });
  }

  async sell() {
    console.log("주문하기");
    this.showCoffeeList();

    console.log(
      "주문가능 수량:",
      this.data.coffeeMenu.map((v, i) => ` ${v.name} : ${v.stock}개 `)
    );
    const order = await askQuestion("메뉴선택: ");
    const count = await askQuestion("주문 수량 입력: ");
    if (this.data.coffeeMenu[+order].stock >= +count) {
      this.data.coffeeMenu[+order].stock -= +count;
      this.data.total += this.data.coffeeMenu[+order].price * +count;

      this.saveData();
      console.log(
        `판매 완료! 판매금액은 ${this.data.coffeeMenu[+order].price * +count} `
      );
    } else console.log("재고 부족으로 판매할수 없음");
  }

  async restock() {
    console.log("재고채우기 시작");
    this.showCoffeeList();

    const menu = await askQuestion("번호 입력: ");
    const amount = await askQuestion("추가 수량 입력: ");

    this.data.coffeeMenu[+menu].stock += +amount;
    this.saveData();
    console.log("재고 추가 완료!");
  }

  summarize() {
    console.log(`오늘의 판매 금액은 ${this.data.total}원입니다.`);
  }

  saveData() {
    fs.writeFileSync("doyou.json", JSON.stringify(this.data), "utf-8");
  }

  async run() {
    console.log("균케이 카페에 오신 걸 환영합니다!");

    while (true) {
      this.displayMenu();
      const answer = await askQuestion("번호입력: ");

      if (answer == "1") {
        await this.sell();
      } else if (answer == "2") {
        await this.restock();
      } else if (answer == "3") {
        this.summarize();
      } else if (answer == "4") {
        console.log("시스템 종료합니다.");
        break;
      } else {
        console.log("잘못된 입력입니다. 다시 시도하세요.");
      }
    }

    process.exit();
  }
}
const shop = new CoffeeShop();
shop.run();

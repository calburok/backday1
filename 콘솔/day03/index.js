const { askQuestion, initializeData } = require("./func/prompt.js");
const { menuOption, InvalidOption } = require("./option/base.js");

const main = async () => {
  const data = initializeData();
  console.log("두유 월드에 오신걸 환영합니다.");
  while (true) {
    console.log("1.판매하기");
    console.log("2.재고 채우기");
    console.log("3.금일 정산");
    console.log("4.시스템 종료");
    const answer = await askQuestion("번호 입력:");
    const option = menuOption[answer] || new InvalidOption();
    await option.execute(data);
  }
};
main();

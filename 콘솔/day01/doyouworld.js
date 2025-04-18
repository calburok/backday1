
const main = async () => {
  console.log("두유 월드에 오신걸 환영합니다.");
  while (true) {
    console.log("1. 주문하기");
    console.log("2. 포장하기");
    console.log("3. 그만두기");

    const answer = await askQuestion("번호입력: ");
    if (answer == "1") console.log("주문시작!");
    else if (answer == "2") console.log("포장시작");
    else if (answer == "3") {
      break;
    } else console.log("잘못된 입력 ㅅㄱ");
  }
};

main();

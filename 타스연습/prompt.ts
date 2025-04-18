import * as readline from "readline";

// readline 인터페이스 생성
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askMenu = () => {
  console.log("1.학생 등록 ");
  console.log("2.학생 수정");
  console.log("3.학생 삭제");
  console.log("4.학생 조회");
  console.log("5.학생 수강과목 등록");
  console.log("6.학생 수강과목 철회");
  console.log("7.프로그램 종료");
};

const action = () => {
  console.log("1.학생관련 업무 ");
  console.log("2.전공관련 업무");
  console.log("3.교수관련 업무");
  console.log("4.수강과목 관련 업부");
  console.log("5.프로그램 종료");
};
const askmajorMenu = () => {
  console.log("1.전공 등록 ");
  console.log("2.전공 조회");
  console.log("3.전공 수정");
  console.log("4.전공 삭제");
};
const askMenucourse = () => {
  console.log("1.수강과목 등록 ");
  console.log("2.수강과목 수정");
  console.log("3.수강과목 삭제");
  console.log("4.수강과목 조회");
};
// 질문을 묻고 답을 받는 함수
const askQuestion = (query: string): Promise<string> =>
  new Promise((resolve) => r1.question(query, resolve));

export { askQuestion, askMenu, action, askmajorMenu, askMenucourse };

// readline 인터페이스 생성

// const kr = require("korean-name-generator");
// const { createObjectCsvWriter } = require("csv-writer");

// const csvWriter = createObjectCsvWriter({
//   path: "professors.csv",
//   header: [
//     { id: "id", title: "id" },
//     { id: "student_name", title: "student_name" },
//     { id: "age", title: "age" },
//     { id: "admission", title: "admission" },
//     { id: "major_id", title: "major_id" },
//   ],
// });

// const getRandom = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const getMajor = () => {
//   const r = getRandom(1, 100);
//   if (r <= 2.5) return 1;
//   else if (r <= 5) return 2;
//   else if (r <= 7.5) return 3;
//   else if (r <= 10) return 4;
//   //사과
//   else if (r <= 16.25) return 5;
//   else if (r <= 22.5) return 6;
//   else if (r <= 28.75) return 7;
//   else if (r <= 35) return 8;
//   //자연
//   else if (r <= 43.3) return 9;
//   else if (r <= 52) return 10;
//   else if (r <= 60) return 11;
//   //공과대
//   else if (r <= 68) return 12;
//   else if (r <= 77) return 13;
//   else if (r <= 90) return 14;
//   // 예체능
//   else if (r <= 93) return 15;
//   else if (r <= 97) return 16;
//   else return 17;
// };

// const data = Array(10000)
//   .fill(100)
//   .map((v, i) => {
//     const age = getRandom(0, 6);
//     const admission = 2025 - age;

//     return {
//       id: i,
//       student_name: kr.generate(i % 2),
//       age: age + 20,
//       admission: admission,
//       marjor_id: getMajor(),
//     };
//   });
// csvWriter.writeRecords(data).then(() => {
//   console.log("CSV 저장 완료");
// });

// const kr = require("korean-name-generator");
// const { createObjectCsvWriter } = require("csv-writer");

// // 인문대 [4 / 10%] 사과대 [4 / 25%] 자연대 [3 / 25%] 공대 [3 / 30%] 예체능 [3 / 10%]

const getMajor = () => {
  const r = Math.random();
  //인문대
  if (r < 0.025) return 1;
  else if (r < 0.05) return 2;
  else if (r < 0.075) return 3;
  else if (r < 0.1) return 4;
  //사과대
  else if (r < 0.1625) return 5;
  else if (r < 0.225) return 6;
  else if (r < 0.2875) return 7;
  else if (r < 0.35) return 8;
  //자연대
  else if (r < 0.43) return 9;
  else if (r < 0.51) return 10;
  else if (r < 0.59) return 11;
  //공대
  else if (r < 0.69) return 12;
  else if (r < 0.79) return 13;
  else if (r < 0.89) return 14;
  //예체능
  else if (r < 0.92) return 15;
  else if (r < 0.95) return 16;
  else return 17;
};

// const csvWriter = createObjectCsvWriter({
//   path: "professors.csv",
//   header: [
//     { id: "id", title: "id" },
//     { id: "professors_name", title: "professors_name" },
//     { id: "major_id", title: "major_id" },
//   ],
// });

// const data = Array(10000)
//   .fill(0)
//   .map((v, i) => {
//     return {
//       id: i,
//       professors_name: kr.generate(i % 2),
//       major_id: getMajor(),
//     };
//   });

// csvWriter.writeRecords(data).then(() => {
//   console.log("CSV 저장 완료");
// });

const { createObjectCsvWriter } = require("csv-writer");
const { courses } = require("./data.js");

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

// 인문대 [4 / 10%] 사과대 [4 / 25%] 자연대 [3 / 25%] 공대 [3 / 30%] 예체능 [3 / 10%]

const csvWriter = createObjectCsvWriter({
  path: "enrollments.csv",
  header: [
    { id: "id", title: "id" },
    { id: "course_id", title: "course_id" },

    { id: "student_id", title: "student_id" },
  ],
});

const data = Array(10000)
  .fill(0)
  .map((v, i) => {
    return {
      id: i,
      course_id: getRandom(0, 100),
      student_id: getRandom(1, 10000),
    };
  });

csvWriter.writeRecords(data).then(() => {
  console.log("CSV 저장 완료");
});

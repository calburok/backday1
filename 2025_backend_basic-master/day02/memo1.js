const fs = require("fs");
const data = fs.readFileSync("student.json", "utf-8");
console.log(JSON.parse(data).capacity);

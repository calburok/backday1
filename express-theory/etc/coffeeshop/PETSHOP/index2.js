fetch("http://localhost:3002/dog", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "뽀빠삐뽀부",
    age: 12,
    species: "삽살개",
    gender: "male",
  }),
})
  .then((v) => v.json())
  .then((v) => console.log(v));

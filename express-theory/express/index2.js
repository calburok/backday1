fetch("http://localhost:3002/boardgame", {
  method: "post",
  headers: { "Content-Type": "text/plain" },
  body: "김현균 멋있따게임",
})
  .then((v) => v.json())
  .then((v) => console.log(v));

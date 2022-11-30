const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`<h1>Hello, stranger</h1>`);
});
app.get("/hello/:name", (req, res) => {
  res.send(`<h1>Wow! Hello There, </h1><h2>${req.params.name}</h2>`);
});

app.listen(port, () => {
  console.log(`App running at port ${port}`);
});

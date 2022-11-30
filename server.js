const express = require("express");
const app = express();
const port = 3000;

//Greetings
//=========
app.get("/", (req, res) => {
  res.send(`<h1>Hello, stranger</h1>`);
});
app.get("/hello/:name", (req, res) => {
  res.send(`<h1>Wow! Hello There, </h1><h2>${req.params.name}</h2>`);
});

//Tip Calculator
//==============
app.get("/tip/:total/:tipPercentage", (req, res) => {
  const payAndTip = req.params.total * (req.params.tipPercentage / 100);
  res.send(
    `<h1>Thank You for your Payment </h1><h2>And your Tip of ${payAndTip} is appreciated!</h2>`
  );
});
app.listen(port, () => {
  console.log(`App running at port ${port}`);
});

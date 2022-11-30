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

//Magic 8 Ball
//============
function answer(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
app.get("/magic/Will%20I%20Be%20A%20Millionaire", (req, res) => {
  const responses = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  ];
  res.send(`<h1>${answer(responses)}</h1>`);
});

app.listen(port, () => {
  console.log(`App running at port ${port}`);
});

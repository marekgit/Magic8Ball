var number = document.getElementById("number");
var reply = document.getElementById("reply");
var input = document.getElementById("input");
var button = document.getElementById("button");

var answers = [
  "It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", "You may rely on it",
  "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Don’t count on it",
  "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful", "Reply hazy, try again",
  "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again"
];

button.addEventListener("click", function(e) {
  if (input.value.length < 1) {
    number.innerText = "";
    reply.innerText = "This is not a question!";
  } else {
    number.innerText = "";
    var randomNum = input.value.length % answers.length;
    reply.innerText = answers[randomNum];
  }
});
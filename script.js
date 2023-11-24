"use strict";
//document.querySelector(".number").textContent = 18;

document.querySelector(".guess").value = 16;
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".score").textContent = score;
let highScore = 0;
//document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);
  console.log(guessNumber);

  if (!guessNumber) {
    DisplayMessage(" No Number!");
    // Win
  } else if (secretNumber === guessNumber) {
    DisplayMessage(" Correct Guess🏆");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (secretNumber !== guessNumber) {
    if (score > 1) {
      DisplayMessage(secretNumber > guessNumber ? " Low!" : "High!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      DisplayMessage(" You lose the game!");
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  const secretNumber = Math.trunc(Math.random() * 20 + 1);
  DisplayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});

function DisplayMessage(message) {
  document.querySelector(".message").textContent = message;
}

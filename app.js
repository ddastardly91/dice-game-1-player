const dice = document.querySelector("#dice");
const roll = document.querySelector("#roll");
const restart = document.querySelector("#restart");
const currentScore = document.querySelector("#currentScore");
const gameEnd = document.querySelector(".game-end");
let totalScore = 0;

roll.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * 6) + 1;
  dice.src = `assets/dice${randomNum}.png`;

  totalScore += randomNum;
  currentScore.textContent = totalScore;

  if (randomNum === 1) {
    gameEnd.textContent = "YOU LOSE! Better luck next time.";
    gameEnd.classList.remove("hidden");

    roll.disabled = true;
    roll.classList.add("hidden");

    restart.classList.remove("hidden");
  } else if (totalScore >= 20) {
    gameEnd.textContent = "YOU WIN! Congratulations!";
    gameEnd.classList.remove("hidden");

    roll.disabled = true;
    roll.classList.add("hidden");

    restart.classList.remove("hidden");
  }
});

restart.addEventListener("click", () => {
  totalScore = 0;
  currentScore.textContent = 0;

  roll.disabled = false;
  roll.classList.remove("hidden");

  gameEnd.classList.add("hidden");

  restart.classList.add("hidden");
});

// Get selectors

const buttons = document.querySelectorAll("button");

const resultEl = document.querySelector(".results");

const playerScore = document.querySelector(".user-score");

const computerScore = document.querySelector(".computer-score");

let playerPoints = 0;
let computerPoints = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Adds event listenr for a click of a button
    playRound(button.className, computerPlay()); // plays a round with the class name and computers random selction and returns results.
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"]; // Array with the choices
  const randomChoice = Math.floor(Math.random() * choices.length); // Get a random number using the arrays length
  return choices[randomChoice]; // Use random number to get choice using index
}

function disableButtons() {
  // disable buttons
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}

function playRound(playerSelection, computerSelection) {
  let result = "";
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerPoints++;
    playerScore.textContent = playerPoints;
    result = `You won! ${playerSelection} beats ${computerSelection}`;

    if (playerPoints === 5) {
      result = `You Won the game! Reload the page to play again`; // if equal to 5 call disable button function
      disableButtons();
    }
  } else {
    computerPoints++;
    computerScore.textContent = computerPoints;
    result = `You Lose! ${computerSelection} beats ${playerSelection}`;

    if (computerPoints === 5) {
      result = `You Lose the game! Reload the page to play again`; // if equal to 5 call disable button function
      disableButtons();
    }
  }
  resultEl.textContent = result;
  return;
}

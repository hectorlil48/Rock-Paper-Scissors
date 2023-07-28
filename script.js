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
    const result = playRound(button.className, computerPlay()); // plays a round with the class name and computers random selction and returns results.
    resultEl.textContent = result; // updates the result paragraph with the winner
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"]; // Array with the choices
  const randomChoice = Math.floor(Math.random() * choices.length); // Get a random number using the arrays length
  return choices[randomChoice]; // Use random number to get choice using index
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerPoints++;
    playerScore.textContent = playerPoints;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerPoints++;
    computerScore.textContent = computerPoints;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

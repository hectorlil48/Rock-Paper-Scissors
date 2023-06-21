function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt(
  "Please select rock, paper or scissors"
).toLowerCase();

let playerScore = 0;
let computerScore = 0;

console.log("Computers pick: " + computerSelection);
console.log("Players pick: " + playerSelection);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Its a tie!";
  } else if (playerSelection === "rock") {
    return computerSelection === "scissors"
      ? "You Win! Rock beats Scissors"
      : "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper") {
    return computerSelection === "rock"
      ? "You Win! Paper beats rock"
      : "You Lose! Scissors beats paper";
  } else if (playerSelection === "scissors") {
    return computerSelection === "paper"
      ? "You Win! Scissors beats paper"
      : "You Lose! Rock beats Scissors";
  } else {
    return "Not a valid pick";
  }
}

function game() {
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
}

game();

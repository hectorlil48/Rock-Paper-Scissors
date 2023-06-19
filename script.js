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

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
  if (playerSelection === computerSelection) {
    return "Its a tie";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "You Win! Rock beats Scissors";
    } else {
      return "You Lose! Paper beats Rock";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You Win! Paper beats Rock";
    } else {
      return "You Lose! Scissors beats Paper";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "You Win! Scissors beat paper";
    } else {
      return "You Lose, Rock beats Scissors";
    }
  }
}

console.log(playRound(playerSelection, computerSelection));

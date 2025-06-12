let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];

  const randomNmber = Math.floor(Math.random() * 3);

  return choices[randomNmber];
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper, Scissors?");

  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  const humanAnswer = humanChoice.toLowerCase();
  const computerAnswer = computerChoice.toLowerCase();

  if (humanAnswer === computerAnswer) {
    console.log("It's a draw!");
  } else if (humanAnswer === "rock" && computerAnswer === "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanAnswer === "rock" && computerAnswer === "scissors") {
    console.log("You win! Rock beats Scissors");
    humanScore++;
  } else if (humanAnswer === "paper" && computerAnswer === "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore++;
  } else if (humanAnswer === "paper" && computerAnswer === "rock") {
    console.log("You win! Paper beats Rock");
    humanScore++;
  } else if (humanAnswer === "scissors" && computerAnswer === "rock") {
    console.log("You lose! Rock beats Scissors");
    computerScore++;
  } else if (humanAnswer === "scissors" && computerAnswer === "paper") {
    console.log("You win! Scissors beats Paper");
    humanScore++;
  }

  console.log(
    `Human answer ${humanAnswer} and computer answer ${computerAnswer}`
  );
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore === computerScore) {
    console.log(
      `It's a draw! Human: ${humanScore}, computer: ${computerScore}`
    );
  } else if (humanScore > computerScore) {
    console.log(`You win! Human: ${humanScore}, computer: ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose! Human: ${humanScore}, computer: ${computerScore}`);
  }
}

playGame();

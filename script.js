let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", playGame);
});

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];

  const randomNmber = Math.floor(Math.random() * 3);

  return choices[randomNmber];
}

function getHumanChoice(e) {
  const playerSelection = e.target.id;

  return playerSelection;
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

function playGame(e) {
  const humanSelection = getHumanChoice(e);
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  const container = document.createElement("div");
  document.body.appendChild(container);

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      container.textContent = `You win! Human: ${humanScore}, computer: ${computerScore}`;
    } else if (computerScore > humanScore) {
      container.textContent = `You lose! Human: ${humanScore}, computer: ${computerScore}`;
    }
  }
}

// DOM ELEMENTS
const rock = document.querySelector("#rock"),
  paper = document.querySelector("#paper"),
  scissors = document.querySelector("#scissors"),
  playGamebtn = document.querySelector("#playGame"),
  main = document.querySelector("main");

// Add event listeners to buttons
rock.addEventListener("click", () => getHumanChoice("rock"));
rock.addEventListener("click", () => playRound());

paper.addEventListener("click", () => getHumanChoice("paper"));
paper.addEventListener("click", () => playRound());

scissors.addEventListener("click", () => getHumanChoice("scissors"));
scissors.addEventListener("click", () => playRound());

playGamebtn.addEventListener("click", () => playGame());

// GAME STATE
let gameStarted = false,
  humanChoice = null,
  computerChoice = null,
  computerScore = 0,
  humanScore = 0,
  round = 1;

// PLAYER INPUT
function getHumanChoice(choice) {
  if (gameStarted === true) {
    humanChoice = choice;
    humanChoiceMade = true;
  } else {
    alert("Game hasn't started! Click the Start game button.");
  }
}

// COMPUTER INPUT
function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let computerChoice = choice[Math.floor(Math.random() * choice.length)];
  return computerChoice;
}

// SCOREBOARD
const scoreboard = document.querySelector("#scoreboard");

console.log = function (message) {
  scoreboard.innerHTML += message + "<br>";
};

// ROUND FUNCTION
function playRound() {
  if (gameStarted === true) {
    getComputerChoice();
    computerChoice = getComputerChoice();

    alert(`I choose ${computerChoice}`);

    if (humanChoice === computerChoice) {
      console.log("It's a Tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      alert(
        `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!`
      );
      humanScore += 1;
    } else {
      alert(
        `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}!`
      );
      computerScore += 1;
    }

    console.log(`Round ${round} results: ${humanScore} : ${computerScore}`);

    round += 1;

    alert(`Round ${round} has started, make a chioce`);
  }
}

// GAME FUNCTION
function playGame() {
  gameStarted = true;
  alert(`Round ${round} has started, make a chioce`);

  if (humanScore < 5 && computerScore < 5) {
    gameStarted = true;
  } else {
    console.log(`Final Score: ${humanScore} : ${computerScore}`);
    if (humanScore > computerScore) {
      console.log("YOU WIN!");
    } else {
      console.log("you lost... better luck next time!");
    }

    gameStarted = false;
  }
}

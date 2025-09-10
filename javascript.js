// DOM ELEMENTS
const rock = document.querySelector("#rock"),
  paper = document.querySelector("#paper"),
  scissors = document.querySelector("#scissors"),
  playGamebtn = document.querySelector("#playGame"),
  main = document.querySelector("main");

// Add event listeners to buttons
rock.addEventListener("click", () => playRound("rock"));

paper.addEventListener("click", () => playRound("paper"));

scissors.addEventListener("click", () => playRound("scissors"));

playGamebtn.addEventListener("click", () => playGame());

// GAME STATE
let gameStarted = false,
  humanChoice = null,
  computerChoice = null,
  computerScore = 0,
  humanScore = 0,
  round = 1;

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
function playRound(humanChoice) {
  if (gameStarted === true) {
    computerChoice = getComputerChoice();

    console.log(`I choose ${computerChoice}`);

    if (humanChoice === computerChoice) {
      console.log("It's a Tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(
        `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!`
      );
      humanScore += 1;
    } else {
      console.log(
        `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}!`
      );
      computerScore += 1;
    }

    console.log(`Round ${round} results: ${humanScore} : ${computerScore}`);

    round += 1;

    console.log(`Round ${round} has started, make a chioce`);

    endGame();
  } else {
    console.log("Game hasn't started! Click the Start game button.");
  }
}

// GAME FUNCTION
function playGame() {
  if (gameStarted === true) {
    console.log("Game is already in progress!");
    return; // stop here, don’t restart
  }

  gameStarted = true;
  console.log(`Round ${round} has started, make a chioce`);
}

// RESET FUNCTION
function endGame() {
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

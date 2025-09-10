// DOM ELEMENTS
const rock = document.querySelector("#rock"),
  paper = document.querySelector("#paper"),
  scissors = document.querySelector("#scissors"),
  playGamebtn = document.querySelector("#playGame"),
  main = document.querySelector("main"),
  scoreboard = document.createElement("div");

// GAME STATE
let gameStarted = false,
  humanChoice = null,
  computerScore = 0,
  humanScore = 0;

// PLAYER INPUT
function getHumanChoice(choice) {
  if (gameStarted === true) {
    humanChoice = choice;
    humanChoiceMade = true;
  } else {
    alert("Game hasn't started!");
  }
}

// COMPUTER INPUT
function getComputerChoice() {
  if (humanChoiceMade === true) {
    let choice = ["rock", "paper", "scissors"];
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
  }
}


// Add event listeners to buttons
rock.addEventListener("click", () => getHumanChoice("rock"));
paper.addEventListener("click", () => getHumanChoice("paper"));
scissors.addEventListener("click", () => getHumanChoice("scissors"));
playGamebtn.addEventListener("click", () => playGame());
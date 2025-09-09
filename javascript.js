// function playGame() {
//   let humanScore = 0,
//     computerScore = 0,
//     numberOfRounds = 0;

//   function playRound() {
//     let humanChoice = getHumanChoice(),
//     computerChoice = getComputerChoice();

//     numberOfRounds += 1;

//     if (humanChoice === computerChoice) {
//       console.log("It's a Tie!");
//     } else if (
//       (humanChoice === "rock" && computerChoice === "scissors") ||
//       (humanChoice === "paper" && computerChoice === "rock") ||
//       (humanChoice === "scissors" && computerChoice === "paper")
//     ) {
//       console.log(
//         `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!`
//       );
//       humanScore += 1;
//     } else {
//       console.log(
//         `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}!`
//       );
//       computerScore += 1;
//     }

//     console.log(
//       `ScoreBoard => ${humanScore} : ${computerScore} (Round ${numberOfRounds})`
//     );
//   }
// }

const rock = document.querySelector("#rock"),
  paper = document.querySelector("#paper"),
  scissors = document.querySelector("#scissors"),
  playGame = document.querySelector("#playGame"),
  main = document.querySelector("main"),
  scoreboard = document.createElement("div");

let gameStarted = false;

function getHumanChoice(choice) {
  if (gameStarted === true) {
    let humanChoice = choice;
    return humanChoice;
  } else {
    alert("Game hasn't started!");
  }
}

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let computerChoice = choice[Math.floor(Math.random() * choice.length)];
  alert(`I choose ${computerChoice}`);
  return computerChoice;
}

rock.addEventListener("click", () => getHumanChoice(rock));
paper.addEventListener("click", () => getHumanChoice(paper));
scissors.addEventListener("click", () => getHumanChoice(scissors));

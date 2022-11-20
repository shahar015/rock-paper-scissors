const choices = ["Rock", "Paper", "Scissors"];
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector(".result");
let player = 0,
  comp = 0;

function getComputerChoice() {
  return (randomItem = choices[Math.floor(Math.random() * choices.length)]);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Draw";
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    player++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    comp++;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    comp++;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    player++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    player++;
    return "You Win! Rock beats Scissors";
  } else {
    player++;
    return "You Win! Scissors beats Paper";
  }
}

function game(choice) {
  if (comp < 5 && player < 5) {
    result.textContent =
      playRound(choice, getComputerChoice()) +
      `. The score is: Computer - ${comp} vs You - ${player}`;
  }
  if (comp == 5) {
    result.textContent = "You Lost The Game! Computer reached 5 points";
  } else if (player == 5) {
    result.textContent = "You Won The Game! You reached 5 points!";
  }
}

rock.addEventListener("click", (e) => game("Rock"));
paper.addEventListener("click", (e) => game("Paper"));
scissors.addEventListener("click", (e) => game("Scissors"));

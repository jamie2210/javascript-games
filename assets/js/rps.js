document.addEventListener("DOMContentLoaded", function() {
   
  });

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.choice-btn')
const userScore = document.getElementById('user-score')
const computerScore = document.getElementById('computer-score')
let userScoreValue = 0;
let computerScoreValue = 0;
let userChoice
let computerChoice
let result

userScore.innerHTML = userScoreValue;
computerScore.innerHTML = computerScoreValue;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length)

  if (randomNumber === 0) {
    computerChoice = 'rock'
  }
  if (randomNumber === 1) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 2) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  }
  else if (
  (computerChoice === 'rock' && userChoice === 'scissors') ||
  (computerChoice === 'scissors' && userChoice === 'paper') ||
  (computerChoice === 'paper' && userChoice === 'rock')
  ) {
    result = "You lose!";
    computerScoreValue += 1;
  }
  else {
    result = "You win!";
    userScoreValue += 1;
  }
  userScore.innerHTML = userScoreValue;
  computerScore.innerHTML = computerScoreValue;
  resultDisplay.innerHTML = result;
}
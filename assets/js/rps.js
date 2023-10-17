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

userChoiceDisplay.innerHTML = '________';
computerChoiceDisplay.innerHTML = '________';
resultDisplay.innerHTML = '________';

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
    computerChoice = 'Rock'
  }
  if (randomNumber === 1) {
    computerChoice = 'Scissors'
  }
  if (randomNumber === 2) {
    computerChoice = 'Paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  }
  else if (
  (computerChoice === 'Rock' && userChoice === 'Scissors') ||
  (computerChoice === 'Scissors' && userChoice === 'Paper') ||
  (computerChoice === 'Paper' && userChoice === 'Rock')
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

  userChoiceDisplay.style.visibility = 'visible';
  userChoiceDisplay.style.opacity = '1';
  computerChoiceDisplay.style.visibility = 'visible';
  computerChoiceDisplay.style.opacity = '1';
  resultDisplay.style.visibility = 'visible';
  resultDisplay.style.opacity = '1';
}
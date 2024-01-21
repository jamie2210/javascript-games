document.addEventListener("DOMContentLoaded", function() {
   
  });

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.rps-icon');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
const modalBackground = document.getElementById('modal-background');
const winModal = document.getElementById('win-modal');
const loseModal = document.getElementById('lose-modal');

let userScoreValue = 0;
let computerScoreValue = 0;
let userChoice
let computerChoice
let result
let wins = 0;
let losses = 0;
let computerWins = 0;
let computerLosses = 0;
let userWins = 0;
let userLosses = 0;

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
    youLost();
  }
  else {
    result = "You win!";
    userScoreValue += 1;
    youWon();
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


/**
* Activates 'win' modal.
*/
function youWon() {
  if (userScoreValue === 3) {
  winModal.style.display = "block";
  modalBackground.style.display = "block";
  }
}

/**
 * Activates 'lose' modal.
 */
function youLost() {
  if (computerScoreValue === 3) {
  loseModal.style.display = "block";
  modalBackground.style.display = "block";
  }
}

/**
* Resets everything on the page apart from the Wins and Losses scores.
* Closes modal.
*/
function reset() {
  location.reload();
}

/**
* Return use home
*/
function home() {
  window.location.href = 'index.html';
}


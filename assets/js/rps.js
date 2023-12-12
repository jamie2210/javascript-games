document.addEventListener("DOMContentLoaded", function() {
   
  });

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.rps-icon')
const userScore = document.getElementById('user-score')
const computerScore = document.getElementById('computer-score')
const winModal = document.getElementById('win-modal');
const winBackground = document.getElementById('win-background');
const loseModal = document.getElementById('lose-modal');
const loseBackground = document.getElementById('lose-background');
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
  }
  else {
    result = "You win!";
    userScoreValue += 1;
    console.log("Result: ", result);
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
 * Activates 'lose' modal.
 * Removes the hidden phrase.
 * Increases the Losses score by 1.
 */
function youLost() {
  if (computerScoreValue === 5) {
      loseModal.style.display = "block";
      loseBackground.style.display = "block";
      document.querySelector('.losses').innerHTML = losses += 1;
      document.querySelector('.joker-losses').innerHTML = computerLosses += 1;
      document.querySelector('.batman-losses').innerHTML = userLosses += 1;
  }
}

/**
* Activates 'win' modal.
* Increase the Wins score by 1.
*/
function youWon() {
  if (userScoreValue === 5) {
  winModal.style.display = "block";
  winBackground.style.display = "block";
  document.querySelector('.wins').innerHTML = wins += 1;
  document.querySelector('.computer-wins').innerHTML = computerWins += 1;
  document.querySelector('.user-wins').innerHTML = userWins += 1;
  }
}

/**
* Resets everything on the page apart from the Wins and Losses scores.
* Closes modal.
*/

function reset() {
  location.reload();
  // userScoreValue = 0;
  // computerScoreValue = 0;
  // winModal.style.display = "none";
  // winBackground.style.display = "none";
  // loseModal.style.display = "none";
  // loseBackground.style.display = "none";
}


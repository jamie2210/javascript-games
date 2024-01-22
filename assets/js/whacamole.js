const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#whac-score');
const modalScore = document.querySelector('#modal-score');
const modalBackground = document.getElementById('modal-background');
const winModal = document.getElementById('whac-modal');
const button = document.querySelector('.start-button');
const startText = document.querySelector('.start-text');
const startGameCount = document.querySelector('#start-game-count')


let result = 0;
let hitPosition;
let currentTime = 61;
let timerId = null;
let countDownTimerId;
let startCountDown = 4;

function randomSquare() {
    squares.forEach(square => {
        const imageElement = square.querySelector('img');

        if(imageElement) {
            imageElement.classList.remove('mole');
        }
    });

    let randomIndex = Math.floor(Math.random() * 9);
    let randomSquare = squares[randomIndex];
    
    squares.forEach(square => {

        const imageElement = square.querySelector('img');

        if (imageElement) {
            if (square !== randomSquare) {
                imageElement.classList.add('visible-no');
            } else {
                imageElement.classList.add('mole');
                imageElement.classList.remove('visible-no');
                hitPosition = imageElement;
            }
        }
    });
}

squares.forEach(square => {
    const imageElement = square.querySelector('img');
    
    imageElement.addEventListener('mousedown', () => {
        if (imageElement == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 600)
}

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        winModal.style.display = "block";
        modalBackground.style.display = "block";
        modalScore.textContent = result;
    }
}

function startGame() {
    startCount();
    setTimeout(() => {
        countDown()
        moveMole()
        countDownTimerId = setInterval(countDown, 1000);
        button.style.visibility = 'hidden';
    }, 3000);
}

function startCount() {
    startCountDown--
    startGameCount.textContent = startCountDown;
    startText.style.display = 'block';
    if (startCountDown <= 0) {
        startText.style.display = 'none';
    } else {
        setTimeout(startCount, 1000);
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
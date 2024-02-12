const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#frogger-score');
const startButton = document.querySelector('#start-button');
const pauseButton = document.querySelector('#pause-button');
const startGameCount = document.querySelector('#start-game-count');
const startText = document.querySelector('.start-text');

let startCountDown = 4;


function startGame() {
    startCount()
    setTimeout( () => {
        startButton.style.display = 'none';
        countDownTimerID = setInterval(countDown, 1000);
    })
}

function startCount() {
    startCountDown--
    startGameCount.textContent = startCountDown;
    startText.style.display = 'block';
    if (startCountDown <= 0) {
        startText.style.display = 'none';
        pauseButton.style.display = 'block';
    } else {
        setTimeout(startCount, 1000);
    }
}
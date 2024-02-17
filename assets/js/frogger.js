const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#frogger-score');
const startButton = document.querySelector('#start-button');
const pauseButton = document.querySelector('#pause-button');
const startGameCount = document.querySelector('#start-game-count');
const startText = document.querySelector('.start-text');
const squares = document.querySelectorAll('.frogger-grid div');

let startCountDown = 4;
let currentIndex = 76
const width = 9

function moveFrog(e) {
    squares[currentIndex].classList.remove('frog');

    switch(e.key) {
        case 'ArrowLeft' : 
        if (currentIndex % width !== 0) currentIndex -= 1
        break
        case 'ArrowRight' :
        if (currentIndex % width < width - 1) currentIndex += 1
        break
        case 'ArrowUp' : 
        if (currentIndex - width >= 0) currentIndex -= width
        break
        case 'ArrowDown' : 
        if (currentIndex + width < width * width) currentIndex += width
        break
    }

    squares[currentIndex].classList.add('frog');
}

document.addEventListener('keyup', moveFrog)

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
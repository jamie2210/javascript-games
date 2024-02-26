const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#frogger-score');
const startButton = document.querySelector('#start-button');
const pauseButton = document.querySelector('#pause-button');
const startGameCount = document.querySelector('#start-game-count');
const startText = document.querySelector('.start-text');
const squares = document.querySelectorAll('.frogger-grid div');
const logsLeft =document.querySelectorAll('.log-left');
const logsRight = document.querySelectorAll('.log-right');
const carsLeft = document.querySelectorAll('.car-left');
const carsRight = document.querySelectorAll('.car-right');

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

function autoMoveElements() {
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
    logsRight.forEach(logRight => moveLogRight(logRight))
    carsLeft.forEach(carLeft => moveCarLeft(carLeft))
    carsRight.forEach(carRight => moveCarRight(carRight))
}

autoMoveElements
setInterval(autoMoveElements, 1000)

function moveLogLeft(logLeft) {
    switch(true) {
        case logLeft.classList.contains('l1') :
            logLeft.classList.remove('l1')
            logLeft.classList.add('l2')
            break
        case logLeft.classList.contains('l2') :
            logLeft.classList.remove('l2')
            logLeft.classList.add('l3')
            break
        case logLeft.classList.contains('l3') :
            logLeft.classList.remove('l3')
            logLeft.classList.add('l4')
            break 
        case logLeft.classList.contains('l4') :
            logLeft.classList.remove('l4')
            logLeft.classList.add('l5')
            break
        case logLeft.classList.contains('l5') :
            logLeft.classList.remove('l5')
            logLeft.classList.add('l1')
            break    
        }
    }  
    
function moveLogRight(logRight) {
    switch(true) {
        case logRight.classList.contains('l1') :
            logRight.classList.remove('l1')
            logRight.classList.add('l5')
            break
        case logRight.classList.contains('l2') :
            logRight.classList.remove('l2')
            logRight.classList.add('l1')
            break
        case logRight.classList.contains('l3') :
            logRight.classList.remove('l3')
            logRight.classList.add('l2')
            break 
        case logRight.classList.contains('l4') :
            logRight.classList.remove('l4')
            logRight.classList.add('l3')
            break
        case logRight.classList.contains('l5') :
            logRight.classList.remove('l5')
            logRight.classList.add('l4')
            break    
        }
    }

function moveCarRight(carRight) {
    switch(true) {
        case carRight.classList.contains('c3') : 
            carRight.classList.remove('c3')
            carRight.classList.add('c2')
            break
        case carRight.classList.contains('c2') : 
            carRight.classList.remove('c2')
            carRight.classList.add('c1')
            break
        case carRight.classList.contains('c1') : 
            carRight.classList.remove('c1')
            carRight.classList.add('c3')
            break
    }
}

function moveCarLeft(carLeft) {
    switch(true) {
        case carLeft.classList.contains('c3') : 
            carLeft.classList.remove('c3')
            carLeft.classList.add('c1')
            break
        case carLeft.classList.contains('c1') : 
            carLeft.classList.remove('c1')
            carLeft.classList.add('c2')
            break
        case carLeft.classList.contains('c2') : 
            carLeft.classList.remove('c2')
            carLeft.classList.add('c3')
            break
    }
}



const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#whac-score')


let result = 0;
let hitPosition;
let currentTime = 61;
let countDownTimerId;

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
    let timerId = null
    timerId = setInterval(randomSquare, 700)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(countDownTimerId)
        alert('GAME OVER! Your final score is' + result)
    }
}

countDownTimerId = setInterval(countDown, 1000);


countDown()
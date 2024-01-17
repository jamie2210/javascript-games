const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')


let result = 0

// function randomSquare() {
//     squares.forEach(square => {
//         square.classList.remove('visibile')
//     });

//     let randomSquare = squares[Math.floor(Math.random() * 9)]
//     randomSquare.classList.add('visible')
//     randomSquare.classList.remove('mole')
// }

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
            }
        }
    });
}

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 500)
}

moveMole()
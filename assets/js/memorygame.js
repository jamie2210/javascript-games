const cardArray = [
    {
        name: 'bear',
        img: 'assets/images/memory/animals/bear.png'
    },
    {
        name: 'cat',
        img: 'assets/images/memory/animals/cat.png'
    },
    {
        name: 'dear',
        img: 'assets/images/memory/animals/dear.png'
    },
    {
        name: 'dog',
        img: 'assets/images/memory/animals/dog.png'
    },
    {
        name: 'donkey',
        img: 'assets/images/memory/animals/donkey.png'
    },
    {
        name: 'elephant',
        img: 'assets/images/memory/animals/elephant.png'
    },
    {
        name: 'fox',
        img: 'assets/images/memory/animals/fox.png'
    },
    {
        name: 'goat',
        img: 'assets/images/memory/animals/goat.png'
    },
    {
        name: 'lion',
        img: 'assets/images/memory/animals/lion.png'
    },
    {
        name: 'owl',
        img: 'assets/images/memory/animals/owl.png'
    },
    {
        name: 'panda',
        img: 'assets/images/memory/animals/panda.png'
    },
    {
        name: 'rabbit',
        img: 'assets/images/memory/animals/rabbit.png'
    },
    {
        name: 'sheep',
        img: 'assets/images/memory/animals/sheep.png'
    },
    {
        name: 'tiger',
        img: 'assets/images/memory/animals/tiger.png'
    },
    {
        name: 'wolf',
        img: 'assets/images/memory/animals/wolf.png'
    },
    {
        name: 'bear',
        img: 'assets/images/memory/animals/bear.png'
    },
    {
        name: 'cat',
        img: 'assets/images/memory/animals/cat.png'
    },
    {
        name: 'dear',
        img: 'assets/images/memory/animals/dear.png'
    },
    {
        name: 'dog',
        img: 'assets/images/memory/animals/dog.png'
    },
    {
        name: 'donkey',
        img: 'assets/images/memory/animals/donkey.png'
    },
    {
        name: 'elephant',
        img: 'assets/images/memory/animals/elephant.png'
    },
    {
        name: 'fox',
        img: 'assets/images/memory/animals/fox.png'
    },
    {
        name: 'goat',
        img: 'assets/images/memory/animals/goat.png'
    },
    {
        name: 'lion',
        img: 'assets/images/memory/animals/lion.png'
    },
    {
        name: 'owl',
        img: 'assets/images/memory/animals/owl.png'
    },
    {
        name: 'panda',
        img: 'assets/images/memory/animals/panda.png'
    },
    {
        name: 'rabbit',
        img: 'assets/images/memory/animals/rabbit.png'
    },
    {
        name: 'sheep',
        img: 'assets/images/memory/animals/sheep.png'
    },
    {
        name: 'tiger',
        img: 'assets/images/memory/animals/tiger.png'
    },
    {
        name: 'wolf',
        img: 'assets/images/memory/animals/wolf.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
const pairsLeft = document.querySelector('#pairs');
const alertText = document.querySelector('#alert');
const alertCont = document.querySelector('.alert-container');
const memoryModal = document.querySelector('#win-modal');
const winBackground = document.querySelector('.win-background');
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'assets/images/memory/question-card3.png');
        card.setAttribute('data-id', i);
        card.classList.add('grid-item', 'img-fluid', 'pre-flip');
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);
        pairsLeft.textContent = cardArray.length / 2;
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log('check for match!')
        
    if (cardsChosen[0] == cardsChosen[1]) {
        alertText.textContent = 'You found a pair!';
        alertCont.style.display = 'inline-block';
        setTimeout(() => {
            alertText.textContent = '';
            alertCont.style.display = 'none';
        }, 2000);
    cards[optionOneId].classList.add('transparent');
    cards[optionTwoId].classList.add('transparent');
    console.log('Transparent class added to cards');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
   } else {
        setTimeout(() => {
    cards[optionOneId].setAttribute('src', 'assets/images/memory/question-card3.png');
    cards[optionTwoId].setAttribute('src', 'assets/images/memory/question-card3.png');          
        }, 1000);
    alertText.textContent = 'Sorry try again!';
    alertCont.style.display = 'inline-block';
        setTimeout(() => {
            alertText.textContent = '';
            alertCont.style.display = 'none';
        }, 1500);
   }
   pairsLeft.textContent = cardArray.length / 2 - cardsWon.length;
   cards[optionOneId].classList.remove('flipped');
   cards[optionTwoId].classList.remove('flipped');
   cards[optionOneId].classList.add('pre-flip');
   cards[optionTwoId].classList.add('pre-flip');
   cards[optionOneId].classList.add('grid-item');
   cards[optionTwoId].classList.add('grid-item');
   cardsChosen = [];
   cardsChosenIds = [];

   if (cardsWon.length === cardArray.length/2) {
        memoryModal.style.display = 'block';
        winBackground.style.display = 'block';
   }
}


function flipCard() {
    const cardId = this.getAttribute('data-id')

    if (this.classList.contains('flipped')) {
        alertText.textContent = 'You clicked on the same card!';
        alertCont.style.display = 'inline-block';
        setTimeout(() => {
            alertText.textContent = '';
            alertCont.style.display = 'none';
        }, 2500);
        // Briefly show the image and then flip it back
        this.setAttribute('src', cardArray[cardId].img);
        
        setTimeout(() => {
            this.classList.toggle('flipped');
            this.classList.toggle('pre-flip');
            this.classList.add('grid-item');
            this.setAttribute('src', 'assets/images/memory/question-card3.png');
            cardsChosen = [];
            cardsChosenIds = [];
        }, 1000);
        return;
    }
    
    cardArray[cardId].name
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    console.log(cardId);
    this.classList.add('flipped');
    this.classList.toggle('pre-flip');
    this.classList.remove('grid-item');
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2){
        setTimeout(checkMatch, 500);
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












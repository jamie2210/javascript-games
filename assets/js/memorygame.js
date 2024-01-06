const cardArray = [
    {
        name: 'bear',
        img: 'assets/images/memory/animals/bear.png'
    },
    {
        name: 'cat',
        img: 'assets/images/memory/animals/cat.png'
    },
    // {
    //     name: 'cockerel',
    //     img: 'assets/images/memory/animals/cock.png'
    // },
    {
        name: 'dear',
        img: 'assets/images/memory/animals/dear.png'
    },
    {
        name: 'bear',
        img: 'assets/images/memory/animals/bear.png'
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
    // {
    //     name: 'cockerel',
    //     img: 'assets/images/memory/animals/cock.png'
    // },
    {
        name: 'dear',
        img: 'assets/images/memory/animals/dear.png'
    },
    {
        name: 'bear',
        img: 'assets/images/memory/animals/bear.png'
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

const gridDisplay = document.querySelector('#grid')
const cardsChosen = []
const cardsChosenIds = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'assets/images/memory/question-card3.png');
        card.setAttribute('data-id', i);
        card.classList.add('grid-item', 'img-fluid');
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    console.log('check for match!')
   if (cardsChosen[0] == cardsChosen[1]) {
    alert('You found a pair!')
    cards[chosenCardsIds[0]].setAttribute('src', 'assets/images/memory/animals/');
    cards[chosenCardsIds[1]].setAttribute('src', 'assets/images/memory/animals/');
    cards[cardschosen[0]].removeEventListener('click', flipCard);
    cards[cardschosen[1]].removeEventListener('click', flipCard);
   }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardArray[cardId].name
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2){
        setTimeout( checkMatch, 500);
    }
}












const grid = document.querySelector('.grid');
const blockWidth = 50;
const blockHeight = 10;

const userStart = [280, 10]
let currentPosition = userStart

// create Block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [ xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

// All my blocks
const allBlocks = [
    new Block(10, 280),
    new Block(70, 280),
    new Block(130, 280),
    new Block(190, 280),
    new Block(250, 280),
    new Block(310, 280),
    new Block(370, 280),
    new Block(430, 280),
    new Block(490, 280),
    new Block(550, 280),

    new Block(10, 260),
    new Block(70, 260),
    new Block(130, 260),
    new Block(190, 260),
    new Block(250, 260),
    new Block(310, 260),
    new Block(370, 260),
    new Block(430, 260),
    new Block(490, 260),
    new Block(550, 260),

    new Block(10, 240),
    new Block(70, 240),
    new Block(130, 240),
    new Block(190, 240),
    new Block(250, 240),
    new Block(310, 240),
    new Block(370, 240),
    new Block(430, 240),
    new Block(490, 240),
    new Block(550, 240),

    new Block(10, 220),
    new Block(70, 220),
    new Block(130, 220),
    new Block(190, 220),
    new Block(250, 220),
    new Block(310, 220),
    new Block(370, 220),
    new Block(430, 220),
    new Block(490, 220),
    new Block(550, 220),

    new Block(10, 200),
    new Block(70, 200),
    new Block(130, 200),
    new Block(190, 200),
    new Block(250, 200),
    new Block(310, 200),
    new Block(370, 200),
    new Block(430, 200),
    new Block(490, 200),
    new Block(550, 200),

    new Block(10, 180),
    new Block(70, 180),
    new Block(130, 180),
    new Block(190, 180),
    new Block(250, 180),
    new Block(310, 180),
    new Block(370, 180),
    new Block(430, 180),
    new Block(490, 180),
    new Block(550, 180),
]

// draw all my blocks
function addBlocks() {
    for (let i = 0; i < allBlocks.length; i++){
        const block = document.createElement('div');
        block.classList.add('block')
        block.style.left = allBlocks[i].bottomLeft[0] + 'px';
        block.style.bottom = allBlocks[i].bottomLeft[1] + 'px';
        grid.appendChild(block);
    }
}

addBlocks()

// Add user
const user = document.createElement('div');
user.classList.add('user');
user.style.left = currentPosition[0] + 'px';
user.style.bottom = currentPosition[1] + 'px';
grid.appendChild(user);
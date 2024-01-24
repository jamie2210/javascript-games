const grid = document.querySelector('.grid');
const blockWidth = 50;
const blockHeight = 10;

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
]

// draw all my blocks
function addBlocks() {
    for (let i = 0; i < allBlocks.length; i++){
        const block = document.createElement('div');
        block.classList.add('blocks')
        block.style.left = allBlocks[i].bottomLeft[0] + 'px';
        block.style.bottom = allBlocks[i].bottomLeft[1] + 'px';
        grid.appendChild(block);
    }
}

addBlocks()
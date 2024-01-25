const grid = document.querySelector('.grid');
const blockWidth = 50;
const blockHeight = 10;
const boardWidth = 615;

const userStart = [285, 10]
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
    new Block(14, 280),
    new Block(74, 280),
    new Block(134, 280),
    new Block(194, 280),
    new Block(254, 280),
    new Block(314, 280),
    new Block(374, 280),
    new Block(434, 280),
    new Block(494, 280),
    new Block(554, 280),

    new Block(14, 260),
    new Block(74, 260),
    new Block(134, 260),
    new Block(194, 260),
    new Block(254, 260),
    new Block(314, 260),
    new Block(374, 260),
    new Block(434, 260),
    new Block(494, 260),
    new Block(554, 260),

    new Block(14, 240),
    new Block(74, 240),
    new Block(134, 240),
    new Block(194, 240),
    new Block(254, 240),
    new Block(314, 240),
    new Block(374, 240),
    new Block(434, 240),
    new Block(494, 240),
    new Block(554, 240),

    new Block(14, 220),
    new Block(74, 220),
    new Block(134, 220),
    new Block(194, 220),
    new Block(254, 220),
    new Block(314, 220),
    new Block(374, 220),
    new Block(434, 220),
    new Block(494, 220),
    new Block(554, 220),

    new Block(14, 200),
    new Block(74, 200),
    new Block(134, 200),
    new Block(194, 200),
    new Block(254, 200),
    new Block(314, 200),
    new Block(374, 200),
    new Block(434, 200),
    new Block(494, 200),
    new Block(554, 200),

    new Block(14, 180),
    new Block(74, 180),
    new Block(134, 180),
    new Block(194, 180),
    new Block(254, 180),
    new Block(314, 180),
    new Block(374, 180),
    new Block(434, 180),
    new Block(494, 180),
    new Block(554, 180),
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
drawUser();
grid.appendChild(user);

// Draw user 
function drawUser() {
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}

// Move user
function moveUser(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if (currentPosition[0] > 0) {
            currentPosition[0] -= 10;
            drawUser();
            }
            break;
        case 'ArrowRight':
            if (currentPosition[0] < boardWidth - blockWidth) {
            currentPosition[0] += 10;
            drawUser();
            }
            break;
    }
}

document.addEventListener('keydown', moveUser)
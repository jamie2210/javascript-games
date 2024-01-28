const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#score');
const blockWidth = 50;
const blockHeight = 10;
const boardWidth = 620;
const ballBoardWidth = 630;
const boardHeight = 310;
const ballDiameter = 20;

const userStart = [280, 10]
let currentPosition = userStart

const ballStart = [300, 40]
let ballCurrentPosition = ballStart
let timerId
let xDirection = 2;
let yDirection = 2;
let score = 0

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
const blocks = [
    // new Block(14, 280),
    // new Block(74, 280),
    // new Block(134, 280),
    // new Block(194, 280),
    // new Block(254, 280),
    // new Block(314, 280),
    // new Block(374, 280),
    // new Block(434, 280),
    // new Block(494, 280),
    // new Block(554, 280),

    // new Block(14, 260),
    // new Block(74, 260),
    // new Block(134, 260),
    // new Block(194, 260),
    // new Block(254, 260),
    // new Block(314, 260),
    // new Block(374, 260),
    // new Block(434, 260),
    // new Block(494, 260),
    // new Block(554, 260),

    // new Block(14, 240),
    // new Block(74, 240),
    // new Block(134, 240),
    // new Block(194, 240),
    // new Block(254, 240),
    // new Block(314, 240),
    // new Block(374, 240),
    // new Block(434, 240),
    // new Block(494, 240),
    // new Block(554, 240),

    // new Block(14, 220),
    // new Block(74, 220),
    // new Block(134, 220),
    // new Block(194, 220),
    // new Block(254, 220),
    // new Block(314, 220),
    // new Block(374, 220),
    // new Block(434, 220),
    // new Block(494, 220),
    // new Block(554, 220),

    // new Block(14, 200),
    // new Block(74, 200),
    // new Block(134, 200),
    // new Block(194, 200),
    // new Block(254, 200),
    // new Block(314, 200),
    // new Block(374, 200),
    // new Block(434, 200),
    // new Block(494, 200),
    // new Block(554, 200),

    // new Block(14, 180),
    // new Block(74, 180),
    // new Block(134, 180),
    // new Block(194, 180),
    // new Block(254, 180),
    // new Block(314, 180),
    new Block(374, 180),
    // new Block(434, 180),
    // new Block(494, 180),
    // new Block(554, 180),
]

// draw all my blocks
function addBlocks() {
    for (let i = 0; i < blocks.length; i++){
        const block = document.createElement('div');
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';
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

// draw the ball
function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px';
    ball.style.bottom = ballCurrentPosition[1] + 'px';
}

// Move user
function moveUser(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if (currentPosition[0] > 0) {
            currentPosition[0] -= 20;
            drawUser();
            }
            break;
        case 'ArrowRight':
            if (currentPosition[0] < boardWidth - blockWidth) {
            currentPosition[0] += 20;
            drawUser();
            }
            break;
    }
}

document.addEventListener('keydown', moveUser)

// Add ball
const ball = document.createElement('div');
ball.classList.add('ball');
drawBall();
grid.appendChild(ball);

// Move the ball
function moveBall() {
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    drawBall();
    checkCollisions();
}

timerId = setInterval(moveBall, 20);

// check for collisions
function checkCollisions() {
    // Check for block collisions
    for (let i = 0; i < blocks.length; i++) {
        if (
            (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
            ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1])
        ) {
            const allBlocks = Array.from(document.querySelectorAll('.block'));
            allBlocks[i].classList.remove('block');
            blocks.splice(i, 1);
            changeDirection();
            score++
            scoreDisplay.innerHTML = score

            // Check for win
            if (blocks.length === 0) {
                scoreDisplay.innerHTML = "YOU WIN";
                clearInterval(timerId);
                document.removeEventListener('keydown', moveUser);
            }
        }
    }

    //check for wall collisions
    if (
        ballCurrentPosition[0] >= (ballBoardWidth - ballDiameter) || 
        ballCurrentPosition[1] >= (boardHeight - ballDiameter) ||
        ballCurrentPosition[0] <= 0
        ) {
        changeDirection();
    }

    // Check for user collisions
    if (
        (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
        (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight)
    ) {
        changeDirection();
    }

    // check for game over
    if (ballCurrentPosition[1] <= 0) {
        clearInterval(timerId);
        scoreDisplay.innerHTML = 'GAME OVER! You Lose.';
        document.removeEventListener('keydown', moveUser);
    }
}

function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2
        return
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2
        return
    }
    if (xDirection === -2 && yDirection === -2 ) {
        yDirection = 2
        return
    }
    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2
        return
    }
}
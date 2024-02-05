const outerGrid = document.querySelector('.outer-grid');
const grid = document.querySelector('.grid');
const changeOrientation = document.querySelector('.change-orientation');
const scoreDisplay = document.querySelector('#score');
const scoreText = document.querySelector('.score-text');
const winScore = document.querySelector('#win-modal-score');
const loseScore = document.querySelector('#lose-modal-score');
const modalBackground = document.getElementById('modal-background');
const loseModalBackground = document.getElementById('lose-modal-background');
const winModal = document.getElementById('win-modal');
const loseModal = document.getElementById('lose-modal');
const button = document.querySelector('.breakout-start-button');
const startText = document.querySelector('.start-text');
const startGameCount = document.querySelector('#start-game-count')

const largeBlockHeight = 10;
const smallBlockHeight = 8;

const largeBlockWidth = 50;
const smallBlockWidth = 40;

const LargeBoardWidth = 620;
const smallBoardWidth = 500;

const largeBallBoardWidth = 630;
const smallBallBoardWidth = 510;

const largeBoardHeight = 310;
const smallBoardHeight = 250;

const ballDiameter = 20;

const blockWidth = window.innerWidth >= 768 ? largeBlockWidth : smallBlockWidth;
const blockHeight = window.innerWidth >= 768 ? largeBlockHeight : smallBlockHeight;
const boardWidth = window.innerWidth >= 768 ? LargeBoardWidth : smallBoardWidth;
const ballBoardWidth = window.innerWidth >= 768 ? largeBallBoardWidth : smallBallBoardWidth;
const boardHeight = window.innerWidth >= 768 ? largeBoardHeight : smallBoardHeight;


const largeUserStart = [280, 10]
const smallUserStart = [230, 8]
const userStart = window.innerWidth >= 768 ? largeUserStart : smallUserStart;

const speed = 40;
let movementInterval;
let currentPosition = userStart
let isMoving = false;

let currentBlocks = [];

const largeBallStart = [300, 40]
const smallBallStart = [245, 35]
const ballStart = window.innerWidth >= 768 ? largeBallStart : smallBallStart;

let ballCurrentPosition = ballStart
let timerId

// Randomly set xDirection to -2 or 2
xDirection = Math.random() < 0.5 ? -2 : 2;
yDirection = 2;

let score = 0;
let startCountDown = 4;

// create Block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
        this.topLeft = [ xAxis, yAxis + blockHeight]
    }
}

// All my blocks
const blocksLarge = [
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

const blocksSmall = [
    new Block(5, 227),
    new Block(55, 227),
    new Block(105, 227),
    new Block(155, 227),
    new Block(205, 227),
    new Block(255, 227),
    new Block(305, 227),
    new Block(355, 227),
    new Block(405, 227),
    new Block(455, 227),

    new Block(5, 215),
    new Block(55, 215),
    new Block(105, 215),
    new Block(155, 215),
    new Block(205, 215),
    new Block(255, 215),
    new Block(305, 215),
    new Block(355, 215),
    new Block(405, 215),
    new Block(455, 215),

    new Block(5, 203),
    new Block(55, 203),
    new Block(105, 203),
    new Block(155, 203),
    new Block(205, 203),
    new Block(255, 203),
    new Block(305, 203),
    new Block(355, 203),
    new Block(405, 203),
    new Block(455, 203),

    new Block(5, 191),
    new Block(55, 191),
    new Block(105, 191),
    new Block(155, 191),
    new Block(205, 191),
    new Block(255, 191),
    new Block(305, 191),
    new Block(355, 191),
    new Block(405, 191),
    new Block(455, 191),

    new Block(5, 179),
    new Block(55, 179),
    new Block(105, 179),
    new Block(155, 179),
    new Block(205, 179),
    new Block(255, 179),
    new Block(305, 179),
    new Block(355, 179),
    new Block(405, 179),
    new Block(455, 179),

    new Block(5, 167),
    new Block(55, 167),
    new Block(105, 167),
    new Block(155, 167),
    new Block(205, 167),
    new Block(255, 167),
    new Block(305, 167),
    new Block(355, 167),
    new Block(405, 167),
    new Block(455, 167),
]

// draw all my blocks
function addBlocks() {
    currentBlocks = window.innerWidth >= 768 ? blocksLarge : blocksSmall;
    for (let i = 0; i < currentBlocks.length; i++){
        const block = document.createElement('div');
        block.classList.add('block')
        block.style.left = currentBlocks[i].bottomLeft[0] + 'px';
        block.style.bottom = currentBlocks[i].bottomLeft[1] + 'px';
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

// move the user block

function moveUser(e) {
    switch(e.type) {
        case 'keydown':
            startMoving(e.key);
            break;
        case 'keyup':
            stopMoving();
            break;
        case 'touchstart':
            touchMove(e.target);
            break;
        case 'touchend':
            stopMoving();
            break;
    }
}

function touchMove(target) {
    if (!isMoving) {
        isMoving =true;
        if (target.classList.contains('fa-chevron-left')) {
            moveLeft();
        } else if (target.classList.contains('fa-chevron-right')) {
            moveRight();
        }
    }
}

function startMoving(key) {
    if (!isMoving) {
        isMoving = true;
        switch(key) {
            case 'ArrowLeft':
                moveLeft();
                break;
            case 'ArrowRight':
                moveRight();
                break;
        }
    }
}

function moveLeft() {
    stopMoving();
    movementInterval = setInterval(function() {
        if (currentPosition[0] > 0) {
            currentPosition[0] -= 10;
            drawUser();
        }
    }, speed);
}

function moveRight() {
    stopMoving();
    movementInterval = setInterval(function() {
        if (currentPosition[0] < boardWidth - blockWidth) {
            currentPosition[0] += 10;
            drawUser();
        }
    }, speed);
}

function stopMoving() {
    clearInterval(movementInterval);
    isMoving = false;
}


document.addEventListener('keydown', moveUser);
document.addEventListener('keyup', moveUser);
document.addEventListener('touchstart', moveUser);
document.addEventListener('touchend', moveUser);

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

// check for collisions
function checkCollisions() {
    // Check for block collisions
    for (let i = 0; i < currentBlocks.length; i++) {
        if (
            (ballCurrentPosition[0] > currentBlocks[i].bottomLeft[0] && ballCurrentPosition[0] < currentBlocks[i].bottomRight[0]) &&
            ((ballCurrentPosition[1] + ballDiameter) > currentBlocks[i].bottomLeft[1] && ballCurrentPosition[1] < currentBlocks[i].topLeft[1])
        ) {
            const allBlocks = Array.from(document.querySelectorAll('.block'));
            allBlocks[i].classList.remove('block');
            currentBlocks.splice(i, 1);
            changeDirection();
            score++
            scoreDisplay.innerHTML = score;

            // Check for win
            if (currentBlocks.length === 0) {
                clearInterval(timerId);
                document.removeEventListener('keydown', moveUser);
                winModal.style.display = "block";
                modalBackground.style.display = "block";
                winScore.innerHTML = score;
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
        document.removeEventListener('keydown', moveUser);
        loseModal.style.display = 'block';
        loseModalBackground.style.display = 'block';
        loseScore.innerHTML = score;
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

function startGame() {
    startCount();
    setTimeout(() => {
        button.style.visibility = 'hidden';
        timerId = setInterval(moveBall, 20);
        countDownTimerId = setInterval(countDown, 1000);
    }, 3000);
}

function startCount() {
    startCountDown--
    startGameCount.textContent = startCountDown;
    startText.style.display = 'block';
    if (startCountDown <= 0) {
        startText.style.display = 'none';
    } else {
        setTimeout(startCount, 1000);
    }
}

function portraitScreen() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        outerGrid.style.display = 'none';
        scoreText.style.display = 'none';
        scoreDisplay.style.display = 'none';
        button.style.display = 'none';
        changeOrientation.style.display = 'block';
    } else {
        // Reset display property
        outerGrid.style.display = ''; 
        scoreText.style.display = '';
        scoreDisplay.style.display = '';
        button.style.display = '';
        changeOrientation.style.display = 'none'
    }
}

var previousSize = window.innerWidth;

function checkScreenSize() {
    var currentSize = window.innerWidth;

    // Check if the screen size crosses the threshold of 768 pixels
    if ((previousSize < 768 && currentSize >= 768) || (previousSize >= 768 && currentSize < 768)) {
        location.reload();
    }

    // Update the previous size for the next check
    previousSize = currentSize;
}

// Call the function initially
checkScreenSize();

function handleResize() {
    portraitScreen();
    checkScreenSize();
}

handleResize();

// Initial call to set the initial state
portraitScreen();

// Add event listeners to respond to changes in orientation and resize
window.addEventListener('orientationchange', portraitScreen);
window.addEventListener('resize', handleResize);

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
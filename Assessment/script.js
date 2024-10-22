// Get current year
document.getElementById('year').textContent = new Date().getFullYear();

// Game Variables
let score = 0;
let gameTime = 30;
let birdie;
let gameInterval;

// Get elements
const gameContainer = document.getElementById('game-container');
const birdieElement = document.getElementById('birdie');
const startButton = document.getElementById('start-button');
const scoreDisplay = document.getElementById('score-display');
const timeDisplay = document.getElementById('time-display');

// Start game
startButton.addEventListener('click', () => {
    score = 0;
    gameTime = 30;
    scoreDisplay.textContent = `Score: ${score}`;
    timeDisplay.textContent = `Time Left: ${gameTime}s`;
    gameContainer.style.display = 'block';
    startButton.style.display = 'none';
    birdieElement.style.display = 'block';
    
    startGame();
});

// Move birdie randomly
function moveBirdie() {
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;

    const newX = Math.floor(Math.random() * (containerWidth - 50));
    const newY = Math.floor(Math.random() * (containerHeight - 50));

    birdieElement.style.left = `${newX}px`;
    birdieElement.style.top = `${newY}px`;
}

// Birdie click event to increase score
birdieElement.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    moveBirdie();
});

// Game countdown and logic
function startGame() {
    moveBirdie(); // First birdie placement

    gameInterval = setInterval(() => {
        gameTime--;
        timeDisplay.textContent = `Time Left: ${gameTime}s`;

        if (gameTime <= 0) {
            clearInterval(gameInterval);
            endGame();
        }
    }, 1000); // Reduce time every second
}

// End game function
function endGame() {
    birdieElement.style.display = 'none';
    gameContainer.style.display = 'none';
    startButton.style.display = 'block';
    alert(`Game over! Your final score is ${score}.`);
}

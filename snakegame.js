//Declare global variables for game board size
const linePixelCount = 40
const totalPixelCount = linePixelCount**2


// Scores to display
let totalFoodEaten = 0
let totalDistanceTraveled = 0

// store game board to an easier variable
const gameContainer = document.getElementById('gameContainer')

// Generate Game board
const createGameBoardPiexels = () => {
    for(i=1;i<= totalPixelCount;i++){
        gameContainer.innerHTML = `${gameContainer.innerHTML} <div class="gameBoardPixel" id = "pixel${i}">`
    }
}
createGameBoardPiexels()

// Shorten reference to game pixels
const gameBoardPixels = document.getElementsByClassName('gameBoardPixel')
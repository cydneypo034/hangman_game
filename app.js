//variables for game logic
const score = document.getElementById("score");
const wrongLetters = document.getElementById("wrongLetters");
const guessesLeft = document.getElementById("guessesLeft");
const words = ['chocolate', 'vanilla', 'strawberry', 'cookie dough', 'mint chocolate chip', 'pistachio', 'cookies and cream', 
'birthday cake', 'buttered pecan', 'neapolitan'];
const hints = ['Made from a brown bean plant and enjoyed hot or cold',
'Made from a bean and great with Applie pie', '', '', '', '', '', '', ''];
const correctWordSound = document.getElementById("correctWordSound");
const incorrectWordSound = document.getElementById("incorrectWordSound");
const word = document.getElementById("word");
const underScores = document.getElementById("underScores");
const hint = document.getElementById("hint");

const keyboardLetters = [];
const playGame = document.getElementById("playGame");
const loadGame = document.getElementById("loadGame");
const startOver = document.getElementById("startOver");

const winnerBox = document.getElementById("winnerBox");
const correctWord = document.getElementById("correctWord");
const nextWord = document.getElementById("nextWord");

const gameOverBox = document.getElementById("gameOverBox");
const numberOfChancesLeft = document.getElementById("numberOfChancesLeft");

//load game upon clicking the load button

function loadGame() {
    
}
//Have player click on play to start game
//First word loads
//Hint needs to match the word given
//The word needs to be loaded as just underscores
//Player should have a keyboard to show the letters to click on and the letters should display the correct ones in the correct spaces
//When the correct letter is clicked on, the letter should replace the underscores, stay in place, and a bell sound should be made
//When the wrong letter is clicked on, the letter should not replace the underscore and a buzzing sound should be made
//It should show they have x number of chances left after a wrong answer.
//When the correct word is guessed, add 10 points to the player's score and ask if they want to play another word. A new word will be generated. The score will stay at 10
//The score will increment by 10 the more words they guess correctly.
//They will have 10 tries to guess the correct word. When the player misses on all 10 tries, they lose and will be asked if they want to play again. A new word will be generated. No score will be given.
//If the player guesses all the words correctly by reaching 100 points, they win the game and will be asked if they want to play again and they will be taken back to the original score with a score of 0.

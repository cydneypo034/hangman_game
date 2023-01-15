//variables for game logic
var alphabet; //letters for the keyboard
var score; //score for players
var choiceWords; //array of words
var choiceCategory; // selected category of words
var chosenChoiceWord; // selected word
var guess; //guess made
var storedGuesses = []; //stored guesses made
var underScores; //number of spaces in word
var chances; //how many chances are left
var correctGuesses; //correct guesses made

var playAgain = document.getElementById("reset");

//cereals, candy, and ice cream categories
//if chosen category is any word from a certain array, have corect category display in html
function selectCategory() {
    if(choiceCategory === choiceWords[0]){
        category.innerHTML = "Ice Cream Flavors";
    } else if (choiceCategory === choiceWords[1]){
        category.innerHTML = "Candy";
    } else if (choiceCategory === choiceWords[2]){
        category.innerHTML = "Cereals";
    }
}

//this function is the play game logic for when a player starts the game
//when the random word is picked from the chosen category, replace the letters with underscores 
function playGame() {
    choiceWords = [
    ['vanilla with sprinkles', 
    'birthday cake', 
    'strawberry shortcake', 
    'oreo cheesecake', 
    'chocolate chip cookie dough'],
    
    ['hershey kisses',
    'lemon gumdrops', 
    'sour patch kids', 
    'lollipop',
    'reeses pieces'],

    ['fruit loops', 
    'fruity pebbles',  
    'frosted flakes', 
    'cinnamon toast crunch',
     'coco puffs']
    ];
    choiceCategory = choiceWords[Math.floor(Math.random() * choiceWords.length)];
    chosenChoiceWord = choiceCategory[Math.floor(Math.random() * choiceCategory.length)]
    chosenChoiceWord = chosenChoiceWord.replace(/_/g, ' ');
    // console.log(chosenChoiceWord);
    console.log(chosenChoiceWord);
    selectCategory();
    chances = 10;
    storedGuesses = [];
    correctGuesses = 0;
    guess = 0;
}

playGame();

//Have player click play again to start a new game and activate playGame function for a new word
playAgain.onclick =
function() {
    playGame();
}

//Player should have a keyboard to show the letters to click on and the letters should display the correct ones in the correct spaces
//function to capture user input; when user presses key on the keyboard
document.onkeyup = function(event) {
    if ((event.key >= 65 && event.key <= 90) || event.key >= 97 && event.key <= 122) {
        alphabet = event.key.toLowerCase();
        guess = alphabet;
    }
}

//The word needs to be loaded as just underscores
//When the correct letter is clicked on, the letter should replace the underscores, stay in place, and a bell sound should be made
//When the wrong letter is clicked on, the letter should not replace the underscore and a buzzing sound should be made
//It should show they have x number of chances left after a wrong answer.
//When the correct word is guessed, add 10 points to the player's score and ask if they want to play another word. A new word will be generated. The score will stay at 10
//The score will increment by 10 the more words they guess correctly.
//They will have 10 tries to guess the correct word. When the player misses on all 10 tries, they lose and will be asked if they want to play again. A new word will be generated. No score will be given.
//If the player guesses all the words correctly by reaching 100 points, they win the game and will be asked if they want to play again and they will be taken back to the original score with a score of 0.

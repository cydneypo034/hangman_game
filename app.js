//variables for game logic
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z']; //letters for the keyboard
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
function selectCategory() {
    if(choiceCategory === choiceWords[0]){
        category.innerHTML = "Ice Cream Flavors";
    } else if (choiceCategory === choiceWords[1]){
        category.innerHTML = "Candy";
    } else if (choiceCategory === choiceWords[2]){
        category.innerHTML = "Cereals";
    }
}

//play the game
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
    underScores = chosenChoiceWord.replace(/_/g, ' ');
    // console.log(chosenChoiceWord);
    console.log(underScores);
    selectCategory();
    chances = 10;
    storedGuesses = [];
    correctGuesses = 0;
    guess = 0;
}

playGame();

playAgain.onclick =
function() {
    playGame();
}


// function playTheGame() {
//     words = Math.floor(Math.random()) * words.length;
//     underScores = word.replace(/_/g, ' ');
//     console.log(word);
//     console.log(underScores);
// }

// startOver.onclick =
// function() {
//     playTheGame();
// }


//Have player click on play to start game
//First word loads
//The word needs to be loaded as just underscores
//Player should have a keyboard to show the letters to click on and the letters should display the correct ones in the correct spaces
//When the correct letter is clicked on, the letter should replace the underscores, stay in place, and a bell sound should be made
//When the wrong letter is clicked on, the letter should not replace the underscore and a buzzing sound should be made
//It should show they have x number of chances left after a wrong answer.
//When the correct word is guessed, add 10 points to the player's score and ask if they want to play another word. A new word will be generated. The score will stay at 10
//The score will increment by 10 the more words they guess correctly.
//They will have 10 tries to guess the correct word. When the player misses on all 10 tries, they lose and will be asked if they want to play again. A new word will be generated. No score will be given.
//If the player guesses all the words correctly by reaching 100 points, they win the game and will be asked if they want to play again and they will be taken back to the original score with a score of 0.

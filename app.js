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
var letter;
var buttons = document.getElementById("keyboardButtons");
var currentWord = [];

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

//function to create letter buttons
    // create an unordered list element called letters. made a for loop to get the length of the alphabet array, then made an id for letters tag called alphabet
    // created an element called list and made the id be called letters. we'll take the array of letters from the alphabet variable into the 
    // list element. we appeand the list eleemnt to the letters and the letters appends to the buttons variable made at the top.
function keyBoard() {
    letters = document.createElement('ul');
    for(var i = 0; i < alphabet.length; i++) {
    letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
    //   check();
      buttons.appendChild(letters);
      letters.appendChild(list);
    }
}

keyBoard();


// function pushCurrentWord(){
//     for (i = 0; i < chosenChoiceWord.length; i++) {
//         currentWord.push("_");
//         console.log(currentWord);
//       }
// }

// pushCurrentWord();
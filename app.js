window.onload = function() {
//variables for game logic
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z']; //letters for the keyboard
var choiceWords; //array of words [categories]
var choiceCategory; // selected category of words [chosenCategory]
var chosenChoiceWord; // selected word [word]
var guess; //guess made [guess]
var storedGuesses = []; //stored guesses made [guesses]
var underScores; //number of spaces in word [space]
var chances; //how many chances are left [lives]
var correctGuesses; //correct guesses made [counter]

//get elements
var buttons = document.getElementById("keyboardButtons");
var playAgain = document.getElementById("reset");
var chancesToGuess = document.getElementById("chances");

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
    ['vanilla', 
    'birthdaycake', 
    'strawberry', 
    'oreocheesecake', 
    'chocolatechip'],
    
    ['hersheykisses',
    'lemongumdrops', 
    'sourstraws', 
    'lollipop',
    'reesespieces'],

    ['fruitloops', 
    'fruitypebbles',  
    'frostedflakes', 
    'applejacks',
     'cocopuffs']
    ];
    choiceCategory = choiceWords[Math.floor(Math.random() * choiceWords.length)];
    chosenChoiceWord = choiceCategory[Math.floor(Math.random() * choiceCategory.length)]
    chosenChoiceWord = chosenChoiceWord.replace(/_/g, ' ');
    // console.log(chosenChoiceWord);
    console.log(chosenChoiceWord);
    selectCategory();
    keyBoard();
    chances = 10;
    storedGuesses = [];
    correctGuesses = 0;
    guess = 0;
    resultingWord();
    chancesLeft();
}

playGame();

//Have player click play again to start a new game and activate playGame function for a new word
playAgain.onclick =
function() {
        correctLetter.parentNode.removeChild(correctLetter);
        letters.parentNode.removeChild(letters);
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
    checkButton();
      buttons.appendChild(letters);
      letters.appendChild(list);
    }
}

// keyBoard();

//adding a spaceboard button to keyboard to aid with some words with spaces.

// this function is checking to see if the correct button was pressed on the keyboard. 
function checkButton() {
    list.onclick = function() {
        var guess = this.innerHTML;
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < chosenChoiceWord.length; i++) {
        if(chosenChoiceWord[i]=== guess) {
            storedGuesses[i].innerHTML = guess;
            correctGuesses += 1;
            console.log(storedGuesses);
            console.log(correctGuesses);
        }
        var wordBeingGuessed = (chosenChoiceWord.indexOf(guess));
        if (wordBeingGuessed === -1) {
            chances -= 1;
            chancesLeft();
            } else {
                chancesLeft();
            }
        }
    }
}

// this function shows what happens when the guess gets made. when taking the holder id for the word, we need to create
// an element to have the correct letters be in a list. we then make a for loop that sets an id value of the correctLetter element
// and has the guess be in a list. if the index of the chosen word has "-" in it, then enter the correct guess in the space.
// the stored guess from the checkButton function is pushed into the list element of guess, then gthe guess gets appended to the spaceforword id.
function resultingWord() {
    spaceForWord = document.getElementById('wordHolder');
    correctLetter = document.createElement('ul');

    for (var i = 0; i < chosenChoiceWord.length; i++) {
      correctLetter.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (chosenChoiceWord[i] === "-") {
        guess.innerHTML = "-";
        underScores = 1;
        console.log(guess[i]);
      } else {
        guess.innerHTML = "_";
      }

      storedGuesses.push(guess);
      spaceForWord.appendChild(correctLetter);
      correctLetter.appendChild(guess);
    }
  }

// resultingWord();

function chancesLeft() {
    chancesToGuess.innerHTML = "You have " + chances + " chances";
    for (var i = 0; i < storedGuesses.length; i++) {
        if (correctGuesses + underScores === storedGuesses.length) {
          chancesToGuess.innerHTML = "You Win!";
        console.log(chancesToGuess);
        }
      } if (chances < 1) {
        chancesToGuess.innerHTML = "Game Over";
    }
  }

// chancesLeft();
}
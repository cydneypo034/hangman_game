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
console.log(choiceCategory);
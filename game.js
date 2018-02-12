// The letters that the computer has to choose from

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];


// Variables for tracking our wins, losses, guessesLeft and what letters we've already guessed

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

// Sets a variable to a random letter included in the alphabet array above

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

// Logs the random letter to the console so we can see if we're correct
    console.log(computerChoice)


// For every time the user clicks a button...
document.onkeyup = function addGuess(event){
   var userGuess = event.key;

// Tells the computer to store the letters guessed in the undefined array guessedLetters and push the string of letters to the HTML id lettersGuessed
   guessedLetters.push(userGuess);

   document.getElementById("lettersGuessed").innerHTML = guessedLetters.toString();
// Tells the computer to subtract the amount of guessed letters from 9
   document.getElementById("guessesLeft").innerHTML = 9 - guessedLetters.length;

    
// Creating a function that resets the applicable variables once the user wins or loses
    function reset(){
        guessedLetters.length=0;
        guessesLeft=9;
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice);
        document.getElementById("guessesLeft").innerHTML = guessesLeft - guessedLetters.length;
    }
// If the user guesses the letter the computer has choosen, add 1 to the variable wins and then run the reset function
    if(userGuess === computerChoice){
        wins++;
        document.getElementById('wins').innerHTML = wins;
        alert("You may be psychic after all.. One more time now..");
        reset();
// If the user guesses incorrectly subtract 1 from guessesLeft 
    } else{
        guessesLeft--;
    }
// If guessesLeft reaches 0, add 1 to losses and reset the game variables
    if(guessesLeft === 0){
        losses++;
        document.getElementById('losses').innerHTML = losses;
        alert("I KNEW you'd fail, see if you can prove me wrong..");
        reset();

    }

} 
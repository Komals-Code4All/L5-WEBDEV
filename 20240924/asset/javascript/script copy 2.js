// random numbers
//-----------------------------------------


// generate random number
function genRandNum() {

     // Math.random() * (max - min) + min 
    randNum = Math.floor(Math.random()  * 99) + 1
    console.log(randNum);
  
}



// ask the user to enter their guess
function getUserInput() {
    userGuess = window.prompt("Please enter a number:");
 
    let validInput = validateInput(   Number(userGuess)   );
   
   
}


//  check if the user has guessed the number
function compareUserInput (userGuess) {

    console.log("User Guess " , userGuess);
    console.log("type of ", typeof userGuess)
    console.log("Rand Num " , randNum);

    // conert incoming userGuess to numeric
    let userGuessNumeric = Number(userGuess);
    console.log("type of ", typeof userGuessNumeric)

    if (userGuessNumeric == randNum) {
        window.alert("You guessed right!");
    }

    if (userGuessNumeric < randNum) {
        window.alert("Too small... try again");
    }

    if (userGuessNumeric > randNum) {
        window.alert("Too big.. try again!");
    }


}



// validate user's input
function validateInput(userGuess) {

    let validNumber = false;

    // check for integer
     validNumber = Number.isInteger( userGuess);

    console.log(userGuess);
    
    // check for range 1 to 100
     if (validNumber) {
        if (userGuess >= 1 &&  userGuess <= 100) {
            validNumber = true;}
        else validNumber = false; 
     }

    return validNumber;
}



// -- MAIN PROCESSING STARTS HERE ------

let userGuess;
let randNum = 0;


genRandNum();

getUserInput();

compareUserInput(userGuess);

// -- END OF PROCESSING ---------
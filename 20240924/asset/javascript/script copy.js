// random numbers
//-----------------------------------------


// generate random number
function genRandNum() {

     // Math.random() * (max - min) + min 
    let randNum = Math.floor(Math.random()  * 99) + 1
    console.log(randNum);
  
}



// ask the user to enter their guess
function getUserInput() {
    let userGuess = window.prompt("Please enter a number:");

    let tempNumber = Number(userGuess);
    let validInput = validateInput(tempNumber);

    

    console.log(userGuess);
    console.log(typeof userGuess);

    console.log(tempNumber);
    console.log(typeof tempNumber);

    console.log(validInput)
}


//  check if the user has guessed the number
function checkUserInput () {



}



// validate user's input
function validateInput(userGUess) {

    let validNumber = false;

    // check for integer
     validNumber = Number.isInteger( userGUess);

    return validNumber;
}



// -- MAIN PROCESSING STARTS HERE ------

genRandNum();

getUserInput()

// checkUserInput()

// -- END OF PROCESSING ---------
const prompt = require("prompt-sync")({signint:true});
let favNumber = 7;
let guess; 


while (guess !== favNumber) {
    
    guess = parseInt(prompt("Guess my favorite number: "));

    
    if (guess < favNumber) {
        console.log("Too low! Try again.");
    } else if (guess > favNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log("Correct! You've guessed my favorite number.");
    }
}

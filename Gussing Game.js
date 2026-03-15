// A simple guessing game where the user has to guess a random number between 1 and a specified maximum.


const max = prompt("Enter the maximum number for the guessing game:");
const randomNum = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess a number between 1 and " + max + ":");
while (guess !== randomNum) {
    if (guess < randomNum) {
        guess = prompt("Too low! Guess again:");
    } else if (guess > randomNum) {
        guess = prompt("Too high! Guess again:");
    }else if (guess == randomNum) { 
        console.log("Congratulations! You guessed the number!");
    }else {
        console.log("Invalid input. Please enter a number.");
    }
}
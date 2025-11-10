let randomLoc = Math.floor(Math.random() * 5);

let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;



/* This is the original way we did this, but the problem with this is
the numbers are not random, which is what we want. */
// let location1 = 3;
// let location2 = 4;
// let location3 = 5;


let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

alert("Welcome to the worse battleship game. The board consists of 7 tiles in row and the ship is only 3 tiles wide")


while (isSunk === false) {
    guess = prompt("Ready, aim fire! (enter a number from 0-6):");

    if (guess < 0 || guess > 6){
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
    }

        /*
    Below is the original way we wrote it. Just keeping here for reference.
    A more simplified method will be below
    */

    // if (guess == location1) {
    //     hits = hits + 1
    // } else if (guess == location2) {
    //     hits = hits + 1;
    // } else if (guess == location3) {
    //     hits = hits + 1;
    // }
    
    if (guess == location1 || guess == location2 || guess == location3) {
        alert("Hit!");
        hits = hits + 1;
    
    if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship, you little prick!");
    }
    } else {
        alert("Miss, what a loser!");
    }
}



//Game has been won, and conclusion stats are listed below.

let stats = "You took " + guesses + " guesses to sink the battleship, " +
 "which means your shooting accuracy was " + (3 / guesses);

 alert(stats);

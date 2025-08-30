let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    //return a random integer between 0 and 9
    return Math.floor(Math.random() * 10)
}
//test generateTarget function
//console.log(generateTarget());

function compareGuesses(humanGuess, computerGuess, secretTargetNumber){
    //calculate the distance of each guess from the secret number
    const humanDifference = Math.abs(humanGuess - secretTargetNumber);
    const computerDifference = Math.abs(computerGuess - secretTargetNumber);

    //if human is closer or tied with computer, human wins
    if (humanDifference <= computerDifference){
        return true;
    }else {
        return false;
    }
}
//test compareGuesses function
//console.log(compareGuesses(5, 5, 10)); -> return true

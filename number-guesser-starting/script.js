let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    //return a random integer between 0 and 9
    return Math.floor(Math.random() * 10)
}
//test generateTarget function
console.log(generateTarget());

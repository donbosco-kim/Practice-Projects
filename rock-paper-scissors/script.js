//function to get computer choice
function getComputerChoice() {
    //generate random number between 0-2
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = '';

    //assign rock, paper or scissors based on random number
    if (randomNumber === 0) {
        computerChoice = 'rock';
    }else if (randomNumber === 1) {
        computerChoice = 'paper';
    }else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

//Test the function
console.log(getComputerChoice());

//function to get player choice
function getPlayerChoice() {
    //prompt player for input
    let playerChoice = prompt ('Enter rock, paper or scissors: ').toLowerCase();
    //check if player input is valid
    if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
        console.log('Please enter either rock, paper or scissors');
        return playerChoice;
    }else {
        return playerChoice;
    }
}
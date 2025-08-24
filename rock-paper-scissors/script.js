
let playerScore = 0;
let computerScore = 0;

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
//console.log(getComputerChoice());

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
//Test the function
//console.log(getPlayerChoice());

//function to determine winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It is a tie!';
    }else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore++;
        return `You win! ${playerChoice} beats ${computerChoice}`;
    }else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore++;
        return `You win! ${playerChoice} beats ${computerChoice}`;
    }else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore++;
        return `You win! ${playerChoice} beats ${computerChoice}`;
    }else if (playerChoice === 'rock' && computerChoice === 'paper'){
        computerScore++;
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}

//function to play game and test determineWinner function
function playGame(){
    for(let i = 0; i < 5; i++){
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round ${i+1}:`);
        console.log(determineWinner(playerChoice, computerChoice));
    }
    //display the final scores after playing 5 rounds
    console.log(`Final Score -> You: ${playerScore}, Computer: ${computerScore}`);
}

playGame();
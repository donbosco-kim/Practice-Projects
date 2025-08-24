

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = '';

    if (randomNumber === 0) {
        computerChoice = 'rock';
    }else if (randomNumber === 1) {
        computerChoice = 'paper';
    }else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}
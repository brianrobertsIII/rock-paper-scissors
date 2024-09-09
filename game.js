
/** alert('ROCK!')
alert('PAPER!')
alert('SCISSORS!')
alert('GO!!') **/

const options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random()* options.length)]
    return choice;
}

function playRound(playerSelection, computerSelection) {
    
}

getComputerChoice();


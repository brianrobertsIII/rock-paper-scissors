
/** alert('ROCK!')
alert('PAPER!')
alert('SCISSORS!')
alert('GO!!') **/

const options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random()* options.length)]
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return 'Tie!';
    }

    else if(
        (playerSelection == 'Rock' && computerSelection == 'Scissors') || 
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')
    ) {
        return 'Player Win!'
    }    

    else {
        return 'Computer Win!'
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == 'Tie') {
        return 'It is a Tie!'
    }

    else if(result == 'Player') {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }

    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function playGame() {
    console.log('Welcome!')
    for (let i = 0; i < 5; i++) {
        const playerSelection = 'Rock';
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }    
}

playGame()
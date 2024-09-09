
/** alert('ROCK!')
alert('PAPER!')
alert('SCISSORS!')
alert('GO!!') **/

const options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random()* options.length)]
    return choice;
}

function getplayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt('Rock Paper Scissors');
        if(choice == null) {
            continue;
        }

        const choiceInUpper = choice.toUpperCase();
        if(options.includes(choiceInUpper)) {
            validatedInput = true;
            return choiceInUpper;
        }
    }
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
        const playerSelection = getplayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }    
}

playGame()
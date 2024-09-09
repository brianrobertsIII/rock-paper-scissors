
alert('ROCK!')
alert('PAPER!')
alert('SCISSORS!')
alert('GO!!')

const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random()* options.length)];
    return choice;
}

function getplayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt('Rock Paper Scissors');
        if(choice == null) {
            continue;
        }

        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return 'Tie';
    }

    else if(
        (playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ){
        return 'Player';
    }    

    else {
        return 'Computer';
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
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log('Welcome!')

    for (let i = 0; i < 5; i++) {
        const playerSelection = getplayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log('-----')
        if(checkWinner(playerSelection, computerSelection) == 'Player') {
            scorePlayer++;
        }

        else if(checkWinner(playerSelection, computerSelection) == 'Computer') {
            scoreComputer++
        }
    }
    console.log('Game Over!')
        if(scorePlayer > scoreComputer) {
            console.log('Player is Winner!');
        }

        else if(scorePlayer < scoreComputer) {
            console.log('Computer is Winner!')
        }

        else {
            console.log('We have a Tie!')
        }
}

playGame()
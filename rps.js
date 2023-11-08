const rockButton = document.querySelector('.rockbutton');
const paperButton = document.querySelector('.paperbutton');
const scissorsButton = document.querySelector('.scissorsbutton');

function getComputerChoice()
{
    const options = ['ROCK', 'PAPER', 'SCISSORS'];
    const choice = options[Math.floor(Math.random() * options.length)];

    return choice;
}

function getPlayerChoice()
{ 
    let choice = prompt('Enter Rock, Paper, or Scissors.').toUpperCase();
    if (choice == 'ROCK' || choice == 'PAPER' || choice == 'SCISSORS')
    {
        return choice;
    }
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        return 'Tie!';
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS')
    {
        return 'You Win! Rock beats Scissors.';
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    {
        return 'You Win! Scissors beats Paper.';
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    {
        return 'You Win! Paper beats Rock.';
    }
    else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS')
    {
        return 'You lose! Rock beats Scissors.';
    }
    else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')
    {
        return 'You Lose! Scissors beats Paper.';
    }
    else if (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    {
        return 'You Lose! Paper beats Rock.';
    }
}


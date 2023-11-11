const rockButton = document.querySelector('.rockbutton');
const paperButton = document.querySelector('.paperbutton');
const scissorsButton = document.querySelector('.scissorsbutton');
const outcomeDiv = document.querySelector('.outcome');

function getComputerChoice()
{
    const options = ['ROCK', 'PAPER', 'SCISSORS'];
    const choice = options[Math.floor(Math.random() * options.length)];

    return choice;
}

// function getPlayerChoice()
// { 
//     let choice = prompt('Enter Rock, Paper, or Scissors.').toUpperCase();
//     if (choice == 'ROCK' || choice == 'PAPER' || choice == 'SCISSORS')
//     {
//         return choice;
//     }
// }

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        const p = document.createElement('p')
        p.innerText = `Tied! You both picked ${playerSelection}`
        outcomeDiv.appendChild('p')
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS')
    {
        const p = document.createElement('p')
        p.innerText = 'You Win! Rock beats Scissors.'
        outcomeDiv.appendChild('p')
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    {
        const p = document.createElement('p')
        p.innerText = 'You Win! Scissors beats Paper.'
        outcomeDiv.appendChild('p')
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    {
        const p = document.createElement('p')
        p.innerText = 'You Win! Paper beats Rock.'
        outcomeDiv.appendChild('p')
    }
    else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS')
    {
        const p = document.createElement('p')
        p.innerText = 'You Lose! Rock beats Scissors.'
        outcomeDiv.appendChild('p')
    }
    else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')
    {
        const p = document.createElement('p')
        p.innerText = 'You Lose! Scissors beats Paper.'
        outcomeDiv.appendChild('p')
    }
    else if (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    {
        const p = document.createElement('p')
        p.innerText = 'You Lose! Paper beats Rock.'
        outcomeDiv.appendChild('p')
    }
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'ROCK'
    playRound(playerSelection, computerSelection)
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'PAPER'
    playRound(playerSelection, computerSelection)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'SCISSORS'
    playRound(playerSelection, computerSelection)
})
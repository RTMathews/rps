let computerScore = 0;
let playerScore = 0;

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

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        const p = document.createElement('p')
        p.innerText = `Tied! You both picked ${playerSelection}`
        outcomeDiv.appendChild(p)
        let currentScore = document.createElement('p')
        currentScore.innerText = `Player: ${playerScore} Computer: ${computerScore}`
        outcomeDiv.appendChild(currentScore)
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS')
    {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You Win! Rock beats Scissors.'
        outcomeDiv.appendChild(p)
        let currentScore = document.createElement('p')
        currentScore.innerText = `Player: ${playerScore} Computer: ${computerScore}`
        outcomeDiv.appendChild(currentScore)
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You Win! Scissors beats Paper.'
        outcomeDiv.appendChild(p)
        let currentScore = document.createElement('p')
        currentScore.innerText = `Player: ${playerScore} Computer: ${computerScore}`
        outcomeDiv.appendChild(currentScore)
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You Win! Paper beats Rock.'
        outcomeDiv.appendChild(p)
        let currentScore = document.createElement('p')
        currentScore.innerText = `Player: ${playerScore} Computer: ${computerScore}`
        outcomeDiv.appendChild(currentScore)
    }
    else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS')
    {
        computerScore++
        const p = document.createElement('p')
        p.innerText = 'You Lose! Rock beats Scissors.'
        outcomeDiv.appendChild(p)
        let currentScore = document.createElement('p')
        currentScore.innerText = `Player: ${playerScore} Computer: ${computerScore}`
        outcomeDiv.appendChild(currentScore)
    }
    else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')
    {
        computerScore++
        const p = document.createElement('p')
        p.innerText = 'You Lose! Scissors beats Paper.'
        outcomeDiv.appendChild(p)
        let currentScore = document.createElement('p')
        currentScore.innerText = `Player: ${playerScore} Computer: ${computerScore}`
        outcomeDiv.appendChild(currentScore)
    }
    else if (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    {
        computerScore++
        const p = document.createElement('p')
        p.innerText = 'You Lose! Paper beats Rock.'
        outcomeDiv.appendChild(p)
        let currentScore = document.createElement('p')
        currentScore.innerText = `Player: ${playerScore} Computer: ${computerScore}`
        outcomeDiv.appendChild(currentScore)
    }
}

const checkWinner = (playerScore, computerScore) => {
    if (playerScore === 5)
    {
        const h2 = document.createElement('h2')
        h2.classList.add('won')
        h2.innerText = 'You have won the game!'
        outcomeDiv.append(h2)
    }
    else if (computerScore === 5)
    {
        const h2 = document.createElement('h2')
        h2.classList.add('lost')
        h2.innerText = 'You have lost the game!'
        outcomeDiv.append(h2)
    }
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'ROCK'
    playRound(playerSelection, computerSelection)
    checkWinner(playerScore, computerScore)
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'PAPER'
    playRound(playerSelection, computerSelection)
    checkWinner(playerScore, computerScore)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'SCISSORS'
    playRound(playerSelection, computerSelection)
    checkWinner(playerScore, computerScore)
})
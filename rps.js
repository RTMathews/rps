function getComputerChoice()
{
    const options = ['ROCK', 'PAPER', 'SCISSORS'];
    const choice = options[Math.floor(Math.random() * options.length)];

    return choice;
    console.log(choice);
}

function getPlayerChoice()
{ 
    let choice = prompt('Enter Rock, Paper, or Scissors.').toUpperCase();
    if (choice == 'ROCK' || choice == 'PAPER' || choice == 'SCISSORS')
    {
        return choice;
        console.log(choice);
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

function game()
{
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++)
    {
        const outcome = playRound(getPlayerChoice(), getComputerChoice());
        console.log(outcome);
        if (outcome.includes('Win'))
        {
            playerScore++;
            console.log('Computer: ', computerScore);
            console.log('Player: ', playerScore);
        }
        else if (outcome.includes('Lose'))
        {
            computerScore++;
            console.log('Computer: ' + computerScore);
            console.log('Player: ' + playerScore);
        }
        else
        {
            console.log('Computer: ' + computerScore);
            console.log('Player: ' + playerScore);
        }
    }
    console.log('Final Score: Player ' + playerScore + ' Computer: ' + computerScore);
    if (playerScore > computerScore)
    {
        console.log('You win the game!');
    }
    else if (computerScore > playerScore)
    {
        console.log('You Lost the game!');
    }
    else
    {
        console.log('Game Tied!');
    }
}

game();
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(human, cpu, target) {
    if (human > 9 || human < 0) alert('Your Number Is Out Of Range!')
    let winner;
    Math.abs(target - human) <= Math.abs(target - cpu) ? winner = true : winner = false;
    return winner;
}

function updateScore(winner) {
    winner === 'human' ? humanScore++ : computerScore++;
}

function advanceRound() {
    currentRoundNumber++;
}
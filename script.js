const gameStatus = document.getElementById('game-status');
const AIChoice = document.getElementById('random-choice-result');

let choices = ['rock', 'paper', 'scissor'];

function playGame(choice) {
    AIChoice.textContent = choices[Math.floor(Math.random() * choices.length)];

    if (choice === AIChoice.textContent) {
        gameStatus.textContent = "It's a draw!";
    } else if ((choice === 'rock' && AIChoice.textContent === 'scissor') || (choice === 'paper' && AIChoice.textContent === 'rock') || (choice === 'scissor' && AIChoice.textContent === 'paper')) {
        gameStatus.textContent = "You win!";
    } else {
        gameStatus.textContent = "You lose!";
    }
}
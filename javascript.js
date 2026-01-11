console.log("Hello,World!");

let rock = "rock";
let paper = "paper";
let scissors = "scissors";

const result = document.querySelector("#result");
const display = document.querySelector("#display")

function getComputerChoice() {
    let computerAnswer = Math.random();
        if (computerAnswer > 0.66)
        return rock;
    else if (computerAnswer > 0.33)
        return paper;
    else return scissors;
}


function playGame() {
    const buttons = document.querySelector("#rps-buttons");
    buttons.addEventListener("click", (event) => {
        event.preventDefault();
        if(gameOver) return;
        if(!event.target.id) return;

        const humanChoice = event.target.id;
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        result.textContent = `Player score: ${humanScore} ___ Computer score: ${computerScore}`; 

        if(humanScore === 5 || computerScore === 5) {
            gameOver = true;
            if(humanScore === 5) {
                display.textContent = "Game over! You win the game!"
            }
            else if(computerScore === 5) {
                display.textContent = "Game over! You lose the game!"
            }
        }
    })
}

let humanScore = 0;
let computerScore = 0;
let gameOver = false;


function playRound(humanChoice, computerChoice) {

    if (humanChoice === rock && computerChoice === paper ||
        humanChoice === paper && computerChoice === scissors ||
        humanChoice === scissors && computerChoice === rock
    ) {
        computerScore++;
        display.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
    }
    else if(humanChoice === rock && computerChoice === scissors ||
            humanChoice === paper && computerChoice === rock ||
            humanChoice === scissors && computerChoice === paper
    ) {
        humanScore++;
        display.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
    }
    else if(humanChoice === rock && computerChoice === rock ||
            humanChoice === paper && computerChoice === paper ||
            humanChoice === scissors && computerChoice === scissors
    ) {
        display.textContent = `It's a draw, ${humanChoice} and ${computerChoice} are same!`;
    }
}

playGame();








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


function getHumanChoice() {
    const buttons = document.querySelector("#rps-buttons");
    buttons.addEventListener("click", (event) => {
        event.preventDefault();
        if(!event.target.id) return;
        //console.log(targetId);

        const humanChoice = event.target.id;
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    })
}



let humanScore = 0;
let computerScore = 0;

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

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);







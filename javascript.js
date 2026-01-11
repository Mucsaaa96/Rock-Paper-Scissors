console.log("Hello,World!");

let rock = "rock";
let paper = "paper";
let scissors = "scissors";

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

    if (humanChoice == rock && computerChoice == paper) {
        computerScore++;
        console.log("You lose! Paper beats rock!");
    }
    else if(humanChoice == rock && computerChoice == scissors) {
        humanScore++;
        console.log("You win! Rock beats scissors");
    }
    else if(humanChoice == rock && computerChoice == rock) {
        console.log("It's a draw.");
    }
    else if(humanChoice === paper && computerChoice === rock) {
        humanScore++;
        console.log("You win! Paper beats rock!");
    }
    else if(humanChoice === paper && computerChoice === scissors) {
        computerScore++;
        console.log("You lose! Scissors beat paper!");
    }
    else if(humanChoice === paper && computerChoice === paper) {
        console.log("It's a draw.");
    }
    else if (humanChoice === scissors && computerChoice === rock) {
        computerScore++;
        console.log("You lose! Rock beats scissors!");
    }
    else if(humanChoice === scissors && computerChoice === paper) {
         humanScore++;
         console.log("You win! Scissors beat paper!");
    }
    else if(humanChoice === scissors && computerChoice === scissors) {
        console.log("It's a draw.");
    }  
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);







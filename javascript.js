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
return prompt("If you want to play, write 'rock', 'paper' or 'scissors'",);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === rock && computerChoice === paper) {
        computerScore++;
        console.log("You lose! Paper beats rock!");
    }
    else if(humanChoice === rock && computerChoice === scissors) {
        humanScore++;
        console.log("You win! Rock beats scissors");
    }
    else if(humanChoice === paper && computerChoice === rock) {
        humanScore++;
        console.log("You win! Paper beats rock!");
    }
    else if(humanChoice === paper && computerChoice === scissors) {
        computerScore++;
        console.log("You lose! Scissors beat paper!");
    }
    else if (humanChoice === scissors && computerChoice === rock) {
        computerScore++;
        console.log("You lose! Rock beats scissors!");
    }
    else if(humanChoice === scissors && computerChoice === paper) {
         humanScore++;
         console.log("You win! Scissors beat paper!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);
console.log(humanScore,computerScore)

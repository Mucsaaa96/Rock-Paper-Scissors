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
    else if(humanChoice === rock && computerChoice === rock) {
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

function playGame() {

    for (let round = 0; round < 5; round++) {
        playRound(getHumanChoice(),getComputerChoice());
        console.log(`Your score: ${humanScore}   Computer score: ${computerScore}`)
    }
    if (humanScore > computerScore) {
        console.log(`Final scores: ${humanScore} : ${computerScore}.
            You win the game!`);
    }
    else if (computerScore > humanScore) {
        console.log(`Final scores: ${humanScore} : ${computerScore}.
            You lose the game!`);
    }
    else console.log(`Final scores: ${humanScore} : ${computerScore}.
            It's a draw! Try again!`);
    }


playGame();





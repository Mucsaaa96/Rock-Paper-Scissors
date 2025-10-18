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

console.log(getHumanChoice());

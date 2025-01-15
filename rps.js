let computerScore = 0
let playerScore = 0

function getComputerAnswer() {
    ans = Math.random();
    if ( ans <= 0.333) {
        return "rock";
    }
    else if ( ans <= 0.666) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerAnswer() {
    let ans = prompt("What is your hand (rock/paper/scissors: ");

    while (true){
        if (ans.toLowerCase() != "rock" && ans.toLowerCase() != "paper" && ans.toLowerCase() != "scissors") {
            ans = prompt("Invalid option. Valid options are rock, paper and scissors. Try again: ");
            continue;
        }   else {
            return ans.toLowerCase();
        }
    }
}


function playGame( ) {
    let computerScore = 0
    let playerScore = 0
    function playRound(playerAns, computerAns) {
        if (playerAns === computerAns){
            console.log("you tie.");
        }
        else if (playerAns === "rock" && computerAns === "paper") {
            console.log("paper beats rock. you lose");
            computerScore += 1;
        }
        else if (playerAns === "paper" && computerAns === "scissors") {
            console.log("scissors beat paper. you lose");
            computerScore += 1;
        }
        else if (playerAns === "scissors" && computerAns === "rock") {
            console.log("rock beats scissors. you lose");
            computerScore += 1;
        }
        else if (playerAns === "paper" && computerAns === "rock") {
            console.log("paper beats rock. you win");
            playerScore += 1;
        }
        else if (playerAns === "scissors" && computerAns === "paper") {
            console.log("scissors beat paper. you win");
            playerScore += 1;
        }
        else if (playerAns === "rock" && computerAns === "scissors") {
            console.log("rock beats scissors. you win");
            playerScore += 1;
        }
    }
    games = prompt ("How many games do you want to play?");

    for (i = 0; i < games; i++) {
        playRound(getPlayerAnswer(), getComputerAnswer());
    }

    console.log(`your score is ${playerScore} and the computers score is ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("you win.");
    }
    else if (playerScore < computerScore) {
        console.log("you lose.");
    } else {
        console.log("you tie.");
    }
}

playGame();
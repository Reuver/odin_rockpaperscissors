let playerSelectText;
let computerSelectText;
let whoWinnerText;
let playerWinAmount;
let computerWinAmount;


document.addEventListener('DOMContentLoaded', function() {
    const rockBtn = document.querySelector("#rockbtn");
    const paperBtn = document.querySelector("#paperbtn");
    const scissorsBtn = document.querySelector("#scissorsbtn");
    playerSelectText = document.querySelector("#playerSelection");
    computerSelectText = document.querySelector("#computerSelection");
    whoWinnerText = document.querySelector("#winnertext");
    playerWinAmount = document.querySelector("#playerscrtext");
    computerWinAmount = document.querySelector("#computerscrtext");


    rockBtn.addEventListener("click", () => {
        playRound("rock", getComputerAnswer());
    });
    
    paperBtn.addEventListener("click", () => {
        playRound("paper", getComputerAnswer());
    });
    
    scissorsBtn.addEventListener("click", () => {
        playRound("scissors", getComputerAnswer());
    });
});


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

function playRound(playerAns, computerAns) {
    playerSelectText.textContent = "your hand is: " + playerAns;
    computerSelectText.textContent = "and the computer's hand is: " + computerAns;

    if (playerAns === computerAns){
        whoWinnerText.textContent = "tie";
    }
    else if (playerAns === "rock" && computerAns === "paper") {
        whoWinnerText.textContent = "computer";
        computerScore += 1;
    }
    else if (playerAns === "paper" && computerAns === "scissors") {
        whoWinnerText.textContent = "computer";
        computerScore += 1;
    }
    else if (playerAns === "scissors" && computerAns === "rock") {
        whoWinnerText.textContent = "computer";
        computerScore += 1;
    }
    else if (playerAns === "paper" && computerAns === "rock") {
        whoWinnerText.textContent = "you";
        playerScore += 1;
    }
    else if (playerAns === "scissors" && computerAns === "paper") {
        whoWinnerText.textContent = "you";
        playerScore += 1;
    }
    else if (playerAns === "rock" && computerAns === "scissors") {
        whoWinnerText.textContent = "you";
        playerScore += 1;
    }
    playerWinAmount.textContent = playerScore;
    computerWinAmount.textContent = computerScore;

}
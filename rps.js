/*

for(i = 0; i < 5; i++) {
   console.log(game());
}


function game() {
function computerPlay() {

    let computerChoices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomChoice];

}
let computerSelection = computerPlay();
// console.log(computerSelection)

let playerPlay = function() {
    let playerChoice = prompt("Rock, Paper or Scissors?")
    if(playerChoice == null) {
        return `cancelled`
    } else
    {return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase(); }
}
let playerSelection = playerPlay();
// console.log(playerSelection)

    if(playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
        
        return "Invalid Selection, please pick Rock, paper or scissors"

    } else if((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        
        return `You win! ${playerSelection} beats ${computerSelection}`

    } else if(playerSelection == computerSelection) {
        return `Draw!`
    }
    else {return `You lose! ${computerSelection} beats ${playerSelection}`}

    
}
*/
let playerScore = 0;
let computerScore = 0;

let playerRock = document.getElementById('rock');
let playerPaper = document.getElementById('paper');
let playerScissors = document.getElementById('scissors');
let resetTrigger = document.getElementById('reset');

function computerPlay() {

    let computerChoices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomChoice];

}

// let computerSelection = computerPlay(); //computer makes its choice.

function singleRound(playerSelection, computerSelection){
if((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        playerScore++;

    document.getElementById('roundResult').textContent = `You win! ${playerSelection} beats ${computerSelection}!`
    document.getElementById('roundResult').style.color = "green";
    document.getElementById('playerPoints').textContent = playerScore;


} else if(playerSelection == computerSelection) {
    document.getElementById('roundResult').textContent = "It's a tie!"
    document.getElementById('roundResult').style.color = "purple";
}
else {
    computerScore++;
    document.getElementById('roundResult').textContent = `you lost! ${computerSelection} beats ${playerSelection}`;
    document.getElementById('roundResult').style.color = "red";
    document.getElementById('computerPoints').textContent = computerScore
}
};

function game(playersChoice) {
    let player = playersChoice;
    let computer = computerPlay();

    singleRound(player, computer);

    if(playerScore == 5) {
        document.getElementById('finalResult').textContent = "WINNER!";
        document.getElementById('finalResult').style.color = "blue";
        document.getElementById('finalResult').style.fontsize = "30px";
        document.getElementById('finalResult').style.fontWeight = "900";
        document.getElementById('roundResult').textContent = "Game Over";

        document.getElementById('rock').disabled=true;
        document.getElementById('paper').disabled=true;
        document.getElementById('scissors').disabled=true;

    } else if(computerScore == 5) {
        document.getElementById('finalResult').textContent = "LOSER!";
        document.getElementById('finalResult').style.color = "red";
        document.getElementById('finalResult').style.fontsize = "50px";
        document.getElementById('finalResult').style.fontWeight = "900";
        document.getElementById('roundResult').textContent = "Game Over";

        document.getElementById('rock').disabled=true;
        document.getElementById('paper').disabled=true;
        document.getElementById('scissors').disabled=true;    } 
}


playerRock.addEventListener('click', () => {
    game("Rock");
});
playerPaper.addEventListener('click', () => {
    game("Paper");
});
playerScissors.addEventListener('click', () => {
    game("Scissors");
});
resetTrigger.addEventListener('click', () => {
    location.reload();
});
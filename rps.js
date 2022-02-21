
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
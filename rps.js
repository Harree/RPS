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
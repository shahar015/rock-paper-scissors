const choices=["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    return randomItem = choices[Math.floor(Math.random()*choices.length)];
}

function playRound (playerSelection, computerSelection){
    if (playerSelection==computerSelection)
        return "Draw";

    else if(playerSelection=="Rock" && computerSelection=="Paper")
        return "You Lose! Paper beats Rock"
    
    else if(playerSelection=="Scissors" && computerSelection=="Rock")
        return "You Lose! Rock beats Scissors"

    else if(playerSelection=="Paper" && computerSelection=="Scissors")
        return "You Lose! Scissors beats Paper"

    else if(playerSelection=="Paper" && computerSelection=="Rock")
        return "You Win! Paper beats Rock"
    
    else if(playerSelection=="Rock" && computerSelection=="Scissors")
        return "You Win! Rock beats Scissors"

    else
        return "You Win! Scissors beats Paper"
}


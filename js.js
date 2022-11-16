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

function askPlayer(){
    let flag = false;
    let playerChoice
    while (flag==false)
    {
        playerChoice = prompt("Choose your choice (1/2/3):\n1 - Rock\n2 - Paper\n3 - Scissors")
        if (parseInt(playerChoice)==NaN){
            alert("please choose a number!")
        }

        

        else
        {
        flag=true;
    }
    }
    return choices[parseInt(playerChoice)-1]
}

function game(){
    for (let i=0; i<5; i++)
    {
        console.log(playRound(askPlayer(),getComputerChoice()));
    }
}
game();
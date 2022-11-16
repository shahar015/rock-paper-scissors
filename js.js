const choices=["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    return randomItem = choices[Math.floor(Math.random()*choices.length)];
}
console.log(getComputerChoice());
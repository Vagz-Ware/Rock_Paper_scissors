const options = ["Rock","Paper","Scissors"] //Options from which the getComputerChoice function selects from.

computerSelection = getComputerChoice () //sets computerSelectio to result of getComputerChoice

playerSelection = getPlayerChoice() //sets playerSelection to result of getPlayerChoice

function  getComputerChoice () { 
    let choice = options[Math.floor(Math.random() * options.length)]
    return choice // creates a variable called choice which holds the result from the options 
}

function getPlayerChoice () { // gets the player's choice 
    return playerChoice = prompt("What do you choose sir?") //prompts the player for a choice and stores the answer in playerChoice
    
}

function singleRound (playerSelection, computerSelection) {
}

console.log(playerSelection)


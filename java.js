/*const options = ["Rock","Paper","Scissors"] //Options from which the getComputerChoice function selects from.

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
*/    
    
const options = ["rock","paper","scissors"] //Options from which the getComputerChoice function selects from.

computerSelection = getComputerChoice () //sets computerSelectio to result of getComputerChoice

playerSelection = getPlayerChoice() //sets playerSelection to result of getPlayerChoice



function  getComputerChoice () { 
    let choice = options[Math.floor(Math.random() * options.length)]
    return choice // creates a variable called choice which holds the result from the options 
}

function getPlayerChoice () { // gets the player's choice 
            return playerChoice = prompt("What do you choose sir?").toLowerCase() //prompts the player for a choice, then turns that choice into lowercase and stores the answer in playerChoice

}

function singleRound (choice, playerChoice) {
    
    if ((choice == "rock" && playerChoice == "paper")
      ||(choice == "paper" && playerChoice == "scissor")
      ||(choice == "scissor" && playerChoice == "rock")) 
    {
        console.log(`You Win, computer chose: ${choice} and you chose: ${playerChoice}`)
    }

    else if (choice === playerChoice) {
        console.log(`Its a tie, computer chose: ${choice} and you chose: ${playerChoice}`)
    }

    else {
        console.log(`You lose, computer chose: ${choice} and you chose: ${playerChoice}`)
    }

    
}

singleRound(computerSelection, playerSelection)

    
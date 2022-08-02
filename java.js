const options = ["Rock","Paper","Scissors"]

function  getComputerChoice () {
    let choice = options[Math.floor(Math.random() * options.length)]
    console.log(choice);
}

getComputerChoice ()


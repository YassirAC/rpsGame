const gameChoices = ["rock","paper","scissors"];

function getComputerChoice(){
    return gameChoices[Math.floor(Math.random()* gameChoices.length)];

}

function validateInput(choice){
    if(gameChoices.includes(choice)){
        return true;
    } else {
        return false;
    }
}

function getPlayerChoice(){
    let userChoice = prompt("Rock, Paper, Scissors? ");
    while (userChoice == null){
        userChoice = prompt("Rock, Paper, Scissors? ");
    }
    userChoice = userChoice.toLowerCase();
    let check = validateInput(userChoice);
    while (check == false){
        userChoice = prompt("Spelling mistake");
    };
    while (userChoice == null){
        userChoice = prompt("Rock, Paper, Scissors? ");
    }
    userChoice = userChoice.toLowerCase();
    check = validateInput(userChoice);
    return userChoice;
    
}

function playRound(){
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    const playerSelection = getPlayerChoice();
    const winner = result(playerSelection, computerSelection);
    console.log(winner);
}

function result(choiceP, choiceC){
    console.log(choiceP, choiceC);
    if(choiceP === choiceC){
        return "Tie";

    } else if((choiceP === "rock" && choiceC =="scissors") || (choiceP === "paper" && choiceC =="rock") || (choiceP === "scissors" && choiceC =="paper")){
        return "Player wins";
    }else{
        return "Computer Wins"
    }
}


function game(){
    playRound();
}

game();




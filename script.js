


function computerPlay(){
    let choices = ["Rock", "Paper", "Scissors"]
    let computerSelection = choices[Math.floor(Math.random()*3)]
    return computerSelection;
}





function playRound(playerSelection, computerPlay) {
    switch (true) {
        case playerSelection == computerPlay:
            tie++
            return "Its a Tie!"
            break;
        case playerSelection === "Rock" && computerPlay === "Scissors":
        case playerSelection === "Paper" && computerPlay === "Rock":
        case playerSelection === "Scissors" && computerPlay === "Paper":
            playerScore++    
            return "You Win!"
            break;
        case playerSelection === "Scissors" && computerPlay === "Rock":
        case playerSelection === "Rock" && computerPlay === "Paper":
        case playerSelection === "Paper" && computerPlay === "Scissors":
            computerScore++
            return "You lose!" 
            break;
    }
}

let computerScore = 0
let playerScore = 0
let tie = 0

function game() {
    for (i=0; i<5; i++) {
        let playerSelection = prompt("Rock, Paper, Scissors Shoot!")
        console.log(playRound(playerSelection, computerPlay()))
        console.log(playerScore + " - " + computerScore + " - " + tie)
    }
    
}

game()



function computerPlay(){
    let choices = ["Rock", "Paper", "Scissors"]
    let computerSelection = choices[Math.floor(Math.random()*3)]
    return computerSelection;
}





function playRound(playerSelection, computerPlay) {
    switch (true) {
        case playerSelection == computerPlay:
            tie++
            result.textContent = `Tie! You Both Chose ${playerSelection}`
            break;
        case playerSelection === "Rock" && computerPlay === "Scissors":
        case playerSelection === "Paper" && computerPlay === "Rock":
        case playerSelection === "Scissors" && computerPlay === "Paper":
            playerScore++    
            result.textContent = `${playerSelection} Beats ${computerPlay}`   
            break;
        case playerSelection === "Scissors" && computerPlay === "Rock":
        case playerSelection === "Rock" && computerPlay === "Paper":
        case playerSelection === "Paper" && computerPlay === "Scissors":
            computerScore++
            result.textContent = `${computerPlay} Beats ${playerSelection}` 
            break;
    }
    if (playerSelection == "Rock"){
        playerChoice.className = "far fa-hand-rock"
    }else if (playerSelection == "Paper"){
        playerChoice.className = "far fa-hand-paper"
    }else if (playerSelection == "Scissors"){
        playerChoice.className = "far fa-hand-scissors"
    }
    if (computerPlay == "Rock"){
        cpuChoice.className = "far fa-hand-rock"
    }else if (computerPlay == "Paper"){
        cpuChoice.className = "far fa-hand-paper"
    }else if (computerPlay == "Scissors"){
        cpuChoice.className = "far fa-hand-scissors"
    }
    gameScore()
    gameOver()

}

let computerScore = 0
let playerScore = 0
let tie = 0

function gameScore(){
    let pScore = document.querySelector("#playerScore");
    pScore.textContent = playerScore;
    let cScore = document.querySelector("#cpuScore");
    cScore.textContent = computerScore;
}

function gameOver(){
    if (playerScore==5){
        computerScore=0;
        playerScore=0
        result.textContent = "Congratulations! You Won!"
    }else if (computerScore==5){
        computerScore=0;
        playerScore=0
        result.textContent = "Sorry! You Lost!"

    }
}

function game() {
    for (i=0; i<5; i++) {
        let playerSelection = prompt("Rock, Paper, Scissors Shoot!")
        console.log(playRound(playerSelection, computerPlay()))
        console.log(playerScore + " - " + computerScore + " - " + tie)
    }
    
}

let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors");

let result = document.querySelector(".result")


rock.addEventListener("click", () => {
    playRound("Rock", computerPlay())
})
paper.addEventListener("click", () => {
    playRound("Paper", computerPlay())
})

scissors.addEventListener("click", () => {
    playRound("Scissors", computerPlay())
})

function displayChoice() {
    switch(true){
        case playerSelection == "Rock":
            playerChoice.className = "far fa-hand-rock"
        break;
        case playerSelection == "Paper":
            playerChoice.className = "far fa-hand-paper"
            break;
        case playerSelection == "Scissors":
            playerChoice.className = "far fa-hand-scissors"
        break;
    }
}
let playerChoice = document.querySelector("#playerChoice")


let cpuChoice = document.querySelector("#cpuChoice")


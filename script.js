let hands = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    let item = hands[Math.floor(Math.random()*hands.length)];
    return item
}

function game() {
    console.log(playRound(prompt(), computerPlay()))
    console.log(playRound(prompt(), computerPlay()))
    console.log(playRound(prompt(), computerPlay()))
    console.log(playRound(prompt(), computerPlay()))
    console.log(playRound(prompt(), computerPlay()))

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            return `Draw! - ${playerSelection} equals ${computerSelection}`
        } else if (computerSelection === "Paper") {
            return `You lost! - ${playerSelection} loses to ${computerSelection}`
        } else {
            return `You won! - ${playerSelection} beats ${computerSelection}`
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return `You won! - ${playerSelection} beats ${computerSelection}`
        } else if (computerSelection === "Paper") {
            return `Draw! - ${playerSelection} equals ${computerSelection}`
        } else {
            return `You lost! - ${playerSelection} loses to ${computerSelection}`
        }
} else {
        if (computerSelection === "Rock") {
            return `You lost! - ${playerSelection} loses to ${computerSelection}`
        } else if (computerSelection === "Paper") {
            return `You won! - ${playerSelection} beats ${computerSelection}`
        } else {
            return `Draw! - ${playerSelection} equals ${computerSelection}`
        }
    }
}

game()
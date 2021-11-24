const result = document.querySelector("#result")
const score = document.querySelector("#score")
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const ui = [rock, paper, scissors]
const hands = ["Rock", "Paper", "Scissors"]

let computerScore = 0;
let humanScore = 0;

ui.forEach(element => element.addEventListener("click", playRound))


function computerPlay() {
    let item = hands[Math.floor(Math.random()*hands.length)];
    return item
};

function updateScore() {
    if(humanScore === 5) {
        score.textContent = `Human won ${humanScore} to ${computerScore}`
    } else if (computerScore === 5) {
        score.textContent = `Computer won ${computerScore} to ${humanScore}`
    }
    score.textContent = `Human: ${humanScore} - ${computerScore} Computer`
}

function playRound(e) {
    const player = e.target.attributes[1].nodeValue
    const computer = computerPlay()
    console.log(`${player} ${computer}`)

    if(humanScore === 5 || computerScore === 5) return;

    if(player === computer) {
        result.textContent = `Both choose ${player} - DRAW!`
    } else if (player === "Rock") {
        if (computer === "Paper") {
            computerScore += 1;
            result.textContent = `You chose ${player}. The computer chose ${computer}. You lost!`
        } else {
            humanScore += 1;
            result.textContent = `You chose ${player}. The computer chose ${computer}. You won!`
        }
    }  else if (player === "Paper") {
        if (computer === "Rock") {
            humanScore += 1;
            result.textContent = `You chose ${player}. The computer chose ${computer}. You won!`
        } else {
            computerScore += 1;
            result.textContent = `You chose ${player}. The computer chose ${computer}. You lost!`
        }
    } else {
        if (computer === "Paper") {
            humanScore += 1;
            result.textContent = `You chose ${player}. The computer chose ${computer}. You won!`
        } else {
            humanScore += 1;
            result.textContent = `You chose ${player}. The computer chose ${computer}. You lost!`
        }
    }
    console.log(`H: ${humanScore} C: ${computerScore}`)
    updateScore()
};
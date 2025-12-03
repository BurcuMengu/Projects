let gameRunning = false;
let stopClickCount = 0;

let scoreOne = 0;
let scoreTwo = 0;

const alertGame = document.getElementById("alert");
const gameScore = document.getElementsByClassName("scoreBoard");

function startGame() {
    if(gameRunning) return;
    gameRunning = true;
    stopClickCount = 0;
    alertGame.textContent = "Game Started!"
    alertGame.classList.add("blink");
}

function stopGame() {
    if(!gameRunning) {
        stopClickCount = 0;
        alertGame.textContent = "";
        return;
        
    }

    gameRunning = false;
    stopClickCount++;
    alertGame.textContent = "Game Stopped!";
    alertGame.classList.remove("blink");
}


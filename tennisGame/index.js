let gameRunning = false;
let stopClickCount = 0;

let scoreOne = 0;
let scoreTwo = 0;

const alertGame = document.getElementById("alert");
const gameScore = document.getElementsByClassName("scoreBoard");
const leftBox = document.getElementById("leftBox");
const rightBox = document.getElementById("rightBox");


function scorePointOne() {
    scoreOne++;
    document.getElementById("playerOne").textContent = scoreOne;
}

function scorePointTwo() {
    scoreTwo++;
    document.getElementById("playerTwo").textContent = scoreTwo;
}

function startGame() {
    if(gameRunning) return;
    gameRunning = true;
    stopClickCount = 0;
    alertGame.textContent = "Game Started!"
    alertGame.classList.add("blink");

    setTimeout(() => {
        let count = 3;
        alertGame.textContent = count;

        const timer = setInterval(() => {
            count--;
            alertGame.textContent = count;
            if(count === 0) {
                clearInterval(timer);
                alertGame.classList.remove("blink");
                alertGame.style.display = "none";
            }
        }, 1000);
    }, 1000);
}

function stopGame() {
    if(!gameRunning) {
        stopClickCount = 0;
        alertGame.textContent = "";
        return;
        
    }

    gameRunning = false;
    stopClickCount++;
    alertGame.style.display = "block";
    alertGame.textContent = "Game Stopped!";
    alertGame.classList.remove("blink");
}

// ---------- Leaderboard Array ----------
let leaderboardArr = JSON.parse(localStorage.getItem('leaderboard')) || [];

// ---------- DOM Elements ----------
let player1CurrentScoreUI = document.getElementById('player1CurrentScoreUI');
let player1TotalScoreUI = document.getElementById('player1TotalScoreUI');
let player2CurrentScoreUI = document.getElementById('player2CurrentScoreUI');
let player2TotalScoreUI = document.getElementById('player2TotalScoreUI');

let diceSound = new Audio('./sounds/dice-sound.mp3');
let winSound = new Audio('./sounds/win-sound.mp3');

let playerName1 = document.getElementById('player1Name');
let playerName2 = document.getElementById('player2Name');

let namePrompt1 = prompt('Enter first player name');
let namePrompt2 = prompt('Enter second player name');

playerName1.textContent = namePrompt1 || "Player 1";
playerName2.textContent = namePrompt2 || "Player 2";

let diceimg = document.querySelector("img");
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");

let player1Turn = true;
let player2Turn = false;

player1.classList.add("active");

let currentScore = 0;
let TotalScorePlayer1 = 0;
let TotalScorePlayer2 = 0;

// ---------- ROLL DICE ----------
function rolldice() {
    const randomNumber = Math.ceil(Math.random() * 6);
    diceimg.src = `./assets/${randomNumber}.webp`;
    diceSound.play();

    if (randomNumber === 1) {
        currentScore = 0;
        if (player1Turn) player1CurrentScoreUI.textContent = 0;
        else player2CurrentScoreUI.textContent = 0;
        switchTurn();
        return;
    }

    currentScore += randomNumber;
    if (player1Turn) player1CurrentScoreUI.textContent = currentScore;
    else player2CurrentScoreUI.textContent = currentScore;
}

// ---------- HOLD ----------
function holdDice() {
    if (player1Turn) {
        TotalScorePlayer1 += currentScore;
        player1TotalScoreUI.textContent = TotalScorePlayer1;
    } else {
        TotalScorePlayer2 += currentScore;
        player2TotalScoreUI.textContent = TotalScorePlayer2;
    }

    currentScore = 0;
    player1CurrentScoreUI.textContent = 0;
    player2CurrentScoreUI.textContent = 0;

    checkWinner();
    switchTurn();
}

// ---------- SWITCH TURN ----------
function switchTurn() {
    player1Turn = !player1Turn;
    player2Turn = !player2Turn;

    player1.classList.toggle("active");
    player2.classList.toggle("active");
}

// ---------- CHECK WINNER ----------
function checkWinner() {
    if (TotalScorePlayer1 >= 100) { // Change to 100 for real game
        winSound.play();
        setTimeout(() => {
            alert(`${playerName1.textContent} Wins 🎉 (Score: ${TotalScorePlayer1})`);
            leaderboardArr.push(`${playerName1.textContent} won from ${playerName2.textContent}`);
            localStorage.setItem("leaderboard", JSON.stringify(leaderboardArr));
            resetGame();
        }, 300);
    }
    if (TotalScorePlayer2 >= 100) {
        winSound.play();
        setTimeout(() => {
            alert(`${playerName2.textContent} Wins 🎉 (Score: ${TotalScorePlayer2})`);
            leaderboardArr.push(`${playerName2.textContent} won from ${playerName1.textContent}`);
            localStorage.setItem("leaderboard", JSON.stringify(leaderboardArr));
            resetGame();
        }, 300);
    }
}

// ---------- RESET GAME ----------
function resetGame() {
    TotalScorePlayer1 = 0;
    TotalScorePlayer2 = 0;
    currentScore = 0;

    player1TotalScoreUI.textContent = 0;
    player2TotalScoreUI.textContent = 0;
    player1CurrentScoreUI.textContent = 0;
    player2CurrentScoreUI.textContent = 0;

    let newName1 = prompt('Enter first player name');
    let newName2 = prompt('Enter second player name');

    playerName1.textContent = newName1 || "Player 1";
    playerName2.textContent = newName2 || "Player 2";

    player1Turn = true;
    player2Turn = false;

    player1.classList.add("active");
    player2.classList.remove("active");
}

// ---------- RESTART BUTTON ----------
document.querySelector("#restart").addEventListener("click", function () {
    TotalScorePlayer1 = 0;
    TotalScorePlayer2 = 0;
    currentScore = 0;
    player1TotalScoreUI.textContent = 0;
    player2TotalScoreUI.textContent = 0;
    player1CurrentScoreUI.textContent = 0;
    player2CurrentScoreUI.textContent = 0;
});

// ---------- LEADERBOARD OPEN ----------
const leaderboardBtn = document.getElementById("leaderboardbtn");
const leaderboardModel = document.getElementById("leaderboardmodel");

leaderboardBtn.addEventListener("click", () => {
    leaderboardModel.classList.toggle("modleoff");

    const leaderboardstats = JSON.parse(localStorage.getItem("leaderboard")) || [];
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
    leaderboardstats.forEach(record => {
        const li = document.createElement('li');
        li.innerText = record;
        ul.appendChild(li);
    });
});

// ---------- CLICK OUTSIDE MODAL TO CLOSE ----------
leaderboardModel.addEventListener("click", function (event) {
    if (event.target === leaderboardModel) {
        leaderboardModel.classList.add("modleoff");
    }
});

// ---------- KEYBOARD SHORTCUTS ----------
document.addEventListener("keydown", function(e) {
    const key = e.key.toLowerCase();
    switch(key){
        case 'n': resetGame(); break;        // N = New Game
        case 'h': holdDice(); break;         // H = Hold Dice
        case 'r': rolldice(); break;         // R = Roll Dice
        case 'l': leaderboardModel.classList.toggle("modleoff"); break; // L = Leaderboard
      
    }

});

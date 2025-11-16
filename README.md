
# 🎲 Dice Game – Two Player JavaScript Game

This is a simple but fun **two-player dice game** built using **HTML, CSS, and JavaScript**.  
Players take turns rolling a dice, collecting points, and racing to reach a winning score of **100**.

If a player rolls a **1**, they lose their current round score and the turn switches.

The first player to reach **100 points** wins the game. 🎉  
A sound effect plays and the game resets automatically.

---
![WhatsApp Image 2025-11-16 at 18 13 07_dda9d1f6](https://github.com/user-attachments/assets/01c56458-2969-4929-a699-256dac708931)


## 🚀 Features

### 🎯 Game Logic
- Two-player turn-based gameplay  
- Roll dice to earn points  
- Hold to save points  
- Rolling a “1” resets only the current round  
- First to reach **100 points** wins  
- Automatic turn switching  
- Auto game reset after winner announcement  

### 🔊 Sound Effects
- Dice roll sound  
- Win sound when a player reaches 100  

### 🎮 UI Highlights
- Active player glow/highlight  
- Dice image updates from `/assets/1.webp` to `/assets/6.webp`  
- Clean score UI for both players  
- Simple, smooth game flow  

---

## 🧩 Game Rules

1. Player 1 starts the game.
2. Click **Roll Dice**:
   - If result is **NOT 1** → score adds to the *current score*
   - If result is **1** → *current score resets* and turn changes
3. Click **Hold**:
   - Adds *current score* to *total score*
   - Switches the turn
4. First player to reach **100** total points wins.

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**

No frameworks required.

---

## 📂 Project Structure

```

📁 project-folder
│── index.html
│── style.css
│── script.js
│── /assets
│     ├── 1.webp
│     ├── 2.webp
│     ├── 3.webp
│     ├── 4.webp
│     ├── 5.webp
│     └── 6.webp
│── /sounds
├── dice-sound.mp3
└── win-sound.mp3

````

---

## 📜 JavaScript Highlights

### ✔ Rolling Dice  
- Updates dice image  
- Plays sound  
- Adds score unless it's 1  

### ✔ Hold Function  
- Saves score  
- Switches players  
- Calls winner check  

### ✔ Winner Logic  
- If score ≥ 100 → win sound  
- Popup alert  
- Game resets  

---

## 🏆 Winner Logic Code (Reference)

```js
function checkWinner() {
    if (TotalScorePlayer1 >= 100) {
        winSound.play();
        alert(`${playerName1.textContent} Wins 🎉`);
        resetGame();
    }
    if (TotalScorePlayer2 >= 100) {
        winSound.play();
        alert(`${playerName2.textContent} Wins 🎉`);
        resetGame();
    }
}
````

---

## 🔄 Reset Game

* Clears all scores
* Asks for new player names
* Sets Player 1 as active again

---

## 📦 Future Improvements (Optional)

You can add these next for premium look:

* 🎉 Confetti animation on win
* 🎲 Dice shake animation
* 🌓 Dark/Light mode
* ✨ Neon glowing UI
* 📊 Score progress bars
* 📱 Mobile responsive layout

If you want, I can create **all of these** for you.

---

## 🔗 Live Demo (if you host)

Add your link here:

```
dice-game-lake-two.vercel.app
```

---

## 👨‍💻 Author

**Waleed Devsigner**
Front-end Developer & Designer
Always learning. Always building.

---

## ⭐ Support

If you like this project, please give the repo a **star ⭐ on GitHub**!

```
✨ Thank you for playing the Dice Game! ✨
```

---

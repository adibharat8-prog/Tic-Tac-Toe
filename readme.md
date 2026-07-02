#  Tic-Tac-Toe Game

A simple and interactive **Tic-Tac-Toe** game built using **HTML, CSS, and JavaScript**. This project demonstrates DOM manipulation, event handling, game state management, and basic game logic without using any external libraries or frameworks.

---

## 📌 Features

- 1. Two-player gameplay (Player X vs Player O)
- 2. Real-time turn indicator
- 3. Automatic winner detection
- 4. Draw detection
- 5. Blur effect after game completion
- 6. Toast notification displaying the winner or draw
- 7. Prevents playing after the game ends
- 8. Prevents overwriting already occupied cells
- 9. Responsive and clean user interface

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

## 📂 Project Structure

```
Tic-Tac-Toe/
│
├── index.html      # Game layout
├── style.css       # Styling and UI
├── script.js       # Game logic
└── README.md
```

---


## 🎯 Game Rules

- Player **X** starts the game.
- Players take turns placing their symbol.
- The first player to align **three identical symbols** horizontally, vertically, or diagonally wins.
- If all nine cells are filled without a winner, the game ends in a **Draw**.

---

## ⚙️ Implementation Details

### Game State

The game board is represented using a JavaScript array.

```javascript
let arr = Array(9).fill(null);
```

Each index corresponds to one cell on the board.

---

### Winner Detection

The game checks all **8 possible winning combinations**:

- 3 Rows
- 3 Columns
- 2 Diagonals

Whenever a player makes a move, the board is evaluated to determine if someone has won.

---



### UI Effects

When the game ends:

- The game board becomes blurred.
- A toast notification appears.
- Further moves are disabled.

---

## 📸 Short Gameplay



<img width="787" height="371" alt="imagesgameplay" src="https://github.com/adibharat8-prog/Tic-Tac-Toe/blob/main/images/imagesgameplay.gif" />







## 💡 Concepts Practiced

- DOM Manipulation
- Event Handling
- Arrays
- Conditional Logic
- CSS Flexbox
- Game State Management
- UI Feedback
- JavaScript Functions

---

## 🔮 Future Improvements

- Restart Game button
- Scoreboard
- Single Player (AI)
- Difficulty Levels
- Sound Effects
- Winning Line Animation
- Responsive Mobile Design
- Dark/Light Theme Toggle

---

## 👨‍💻 Author

**Aditya Kumar**

B.Tech Instrumentation & Control Engineering  
Netaji Subhas University of Technology (NSUT)

GitHub: https://github.com/your-username

LinkedIn: https://www.linkedin.com/in/aditya-kumar-73708b34a/

---

## ⭐ If you like this project

Give this repository a ⭐ on GitHub if you found it helpful!

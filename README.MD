# 🚗💨 Type and Win: The Typing Race Challenge!

A fun and engaging browser-based typing game where your typing speed fuels your race car to victory against an AI opponent! Test your WPM (Words Per Minute) and see if you have what it takes to cross the finish line first.

## 📸 Screenshots

**Game Start Screen:**
<img src="https://i.postimg.cc/1z5B3hpx/Screenshot-1.png" alt="Type and Win Start Screen" width="600"/>

**Gameplay in Action:**
<img src="https://i.postimg.cc/FHxGvskg/Screenshot-2.png" alt="Type and Win Success" width="600"/>

## ✨ Features

*   **Dynamic Word Generation:** A wide variety of words to type, keeping the challenge fresh.
*   **Real-time Racing:** Watch your car and the opponent's car race across the track.
*   **AI Opponent:** Compete against a computer-controlled car that moves at a steady pace.
*   **WPM Tracking:** Your Words Per Minute are calculated and displayed at the end of each game.
*   **Responsive Design:** Playable across different screen sizes, from desktop to mobile.
*   **Sleek UI:** Modern and clean interface with engaging visuals.
*   **"Play Again" Functionality:** Jump right back into the action after a game.

## 🎮 How to Play

1.  **Start the Game:** Click the "START GAME" button on the initial screen.
2.  **The Race Begins:**
    *   The game interface will appear, showing the racetrack with your car (bottom) and the opponent's car (top).
    *   A **dynamic word** will be displayed in the center panel.
    *   An **input field** will appear below the word, ready for you to type.
3.  **Type the Word:**
    *   Accurately type the displayed word into the input field.
    *   The input is case-insensitive, so don't worry about capitalization.
4.  **Move Your Car:**
    *   Each time you correctly type a word and press space (or if the input auto-clears on match), your car will surge forward on the track.
    *   A new word will then appear for you to type.
5.  **The Opponent:**
    *   The opponent's car moves automatically at a consistent speed.
6.  **Win or Lose:**
    *   **To Win:** Type words quickly and accurately to make your car reach the "FINISH" line before the opponent's car.
    *   **To Lose:** If the opponent's car reaches the "FINISH" line before yours, the game is over, and you lose.
7.  **Game Over & Results:**
    *   A modal dialog will pop up displaying the game's outcome ("You Win!!!" or "You Lost!").
    *   Your calculated Words Per Minute (WPM) for that round will also be shown.
8.  **Play Again:** Click the "Play Again" button in the modal to reset the game and start a new race.

## 🛠️ Technologies Used

*   **HTML5:** For the basic structure and content of the game.
*   **CSS3:** For styling the game, including the track, cars, buttons, and overall layout.
    *   Utilizes modern CSS features for responsive design (e.g., Flexbox, clamp()).
    *   Custom fonts for a unique look (`Racing Sans One`).
*   **Vanilla JavaScript (ES6+):** For all the game logic, including:
    *   Word generation and display.
    *   Handling user input and validating typed words.
    *   Moving the cars based on player performance and AI logic.
    *   Managing game state (start, ongoing, game over).
    *   Calculating WPM.
    *   DOM manipulation to update the UI dynamically.

## 🚀 Getting Started (Running Locally)

1.  **Clone or Download:**
    *   Clone the repository: `git clone <repository-url>`
    *   Or download the ZIP file and extract it.
2.  **Navigate to the Directory:**
    ```bash
    cd path/to/type-and-win-project
    ```
3.  **Open `index.html`:**
    *   Simply open the `index.html` file in your favorite web browser (e.g., Chrome, Firefox, Edge, Safari).

That's it! The game will load, and you can start playing.

## 💡 Future Enhancements (Potential Ideas)

*   **Difficulty Levels:** Adjust AI car speed or word complexity.
*   **Word Categories:** Allow players to choose word themes (e.g., animals, programming, countries).
*   **Sound Effects:** Add sounds for typing, car movement, and winning/losing.
*   **Visual Customization:** Allow players to choose different car colors or track themes.
*   **Leaderboard:** Store high scores locally or using a backend service.
*   **Power-ups/Obstacles:** Introduce elements to make the race more dynamic.

---

Enjoy the race and may your typing be swift!
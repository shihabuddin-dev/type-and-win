const carOne = document.getElementById("car-1");
const carTwo = document.getElementById("car-2");
const startGameBtn = document.getElementById("start-game");
const typeContainer = document.getElementById("type-container");
const wordToTypeView = document.getElementById("word-to-type");
const typedWordInput = document.getElementById("typed-word");
const modal = document.getElementById("modal");

setTimeout(() => {
    carOne.style.left = "5%";
    carTwo.style.left = "5%";
}, 100);

const words = [
    "the", "quick", "brown", "fox", "jumps", "over", "lazy", "dog", "sun", "moon",
    "star", "tree", "river", "hill", "sky", "game", "play", "win", "type", "race",
    "speed", "challenge", "keyboard", "monitor", "computer", "code", "javascript",
    "develop", "software", "internet", "web", "page", "style", "script", "button",
    "click", "event", "listener", "function", "variable", "array", "object", "loop",
    "while", "for", "if", "else", "true", "false", "null", "undefined", "return",
    "break", "continue", "class", "method", "property", "constructor", "module",
    "import", "export", "async", "await", "promise", "fetch", "response", "request",
    "header", "body", "element", "document", "window", "console", "log", "error",
    "debug", "test", "unit", "integration", "deploy", "server", "client", "network",
    "protocol", "http", "https", "dns", "ip", "port", "data", "string", "number",
    "boolean", "bigint", "symbol", "alert", "prompt", "confirm", "timeout", "interval",
    "clear", "left", "right", "top", "bottom", "position", "absolute", "relative",
    "static", "fixed", "display", "block", "inline", "flex", "grid", "margin", "padding",
    "border", "color", "background", "image", "font", "text", "align", "center",
    "shadow", "opacity", "transform", "transition", "animation", "keyframe", "media",
    "query", "responsive", "design", "mobile", "tablet", "desktop", "apple", "banana",
    "orange", "grape", "lemon", "lime", "berry", "fruit", "green", "yellow", "blue",
    "purple", "black", "white", "silver", "gold", "platinum", "diamond", "ruby",
    "emerald", "sapphire", "happy", "smile", "laugh", "friend", "family", "love",
    "peace", "dream", "future", "world", "earth", "space", "planet", "galaxy",
    "universe", "light", "dark", "sound", "music", "art", "science", "history",
    "story", "book", "read", "write", "learn", "teach", "study", "school", "college",
    "work", "job", "career", "money", "house", "home", "city", "country", "travel",
    "journey", "adventure", "explore", "discover", "ocean", "mountain", "forest",
    "desert", "island", "beach", "wave", "sand", "water", "fire", "air",
    "spirit", "mind", "body", "health", "sport", "exercise", "food", "drink",
    "morning", "afternoon", "evening", "night", "today", "tomorrow", "yesterday",
    "always", "never", "often", "sometimes", "usually", "rarely", "again", "once",
    "example", "another", "because", "however", "therefore", "although", "through",
    "between", "among", "without", "within", "around", "about", "above", "below",
    "SYSTEM", "PROGRAM", "INTERFACE", "DATABASE", "ALGORITHM", "NETWORK", "SECURITY",
    "AUTHENTICATION", "AUTHORIZATION", "ENCRYPTION", "DECRYPTION", "FRAMEWORK",
    "LIBRARY", "COMPONENT", "APPLICATION", "PLATFORM", "CLOUD", "VIRTUAL", "MACHINE"
];


let car1Position = 5;
let car2Position = 5;
let wordToType = "";
let isGameOver = false;
let wordCount = 0;
let startTime = null;

const gameWinController = (winner) => {
    isGameOver = true;
    typedWordInput.setAttribute("disabled", true);
    const elapsedTime = (Date.now() - startTime) / 1000 / 60;
    const wpm = Math.round(wordCount / elapsedTime);

    modal.innerHTML = `
   <div id="modal-content">
    <h2>Game Over</h2>
    <h3>${winner}</h3>
    <h3>Your WPM: ${wpm}</h3>
    <button onclick="playAgain()" class="btn">Play Again</button>
    </div>
  
  `;
    modal.showModal();
};

const typeHandler = () => {
    wordToType = words[Math.floor(Math.random() * words.length)];
    wordToTypeView.innerText = wordToType;
    typedWordInput.addEventListener("input", (e) => {
        if (e.target.value.trim() === wordToType) {
            wordCount++;
            car2Position += 10;
            typeHandler();
            typedWordInput.value = "";

            carTwo.style.left = car2Position + "%";
            if (car2Position >= 78) {
                gameWinController("You win!!!");
            }
        }
    });
};

const constantCarOneMove = () => {
    const carOneMove = setInterval(() => {
        if (isGameOver) {
            clearInterval(carOneMove);
        }

        if (car1Position >= 78) {
            isGameOver = true;
            gameWinController("You Lost!");
        }

        car1Position += 0.5;
        carOne.style.left = car1Position + "%";
    }, 100);
};

const constantCarTwoMove = () => {
    const carTwoMove = setInterval(() => {
        if (isGameOver) {
            clearInterval(carTwoMove);
        }
        if (car2Position >= 78) {
            isGameOver = true;
            gameWinController("You win!!!");
        }

        car2Position += 0.1;
        carTwo.style.left = car2Position + "%";
    }, 100);
};

const startGame = () => {
    startGameBtn.style.visibility = "hidden";
    typeContainer.style.visibility = "visible";
    startTime = Date.now();
    typedWordInput.focus();
    constantCarOneMove();
    constantCarTwoMove();
    typeHandler();
};

const playAgain = () => {
    car1Position = 0;
    car2Position = 0;
    wordToType = "";
    isGameOver = false;
    wordCount = 0;
    typedWordInput.removeAttribute("disabled");

    startGame();
    modal.close();
};

startGameBtn.addEventListener("click", startGame);
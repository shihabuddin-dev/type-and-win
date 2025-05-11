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
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "lazy",
  "dog",
  "sun",
  "moon",
  "star",
  "tree",
  "river",
  "hill",
  "sky",
  "game",
  "play",
  "win",
];

let car1Position = 5;
let car2Position = 5;
let wordToType = "";
let isGameOver = false;
let wordCount = 0;
let startTime = null;
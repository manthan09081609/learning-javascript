let randomNumber = parseInt(Math.random() * 100 + 1);

const submitButton = document.querySelector("#subt");
const guessField = document.getElementById("guessField");
const guesses = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
p.innerHTML = "<button id='newGame'>Start New Game</button>";
p.style.marginBottom = "20px";

let numGuess = 1;
let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const guess = parseInt(guessField.value);

    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a number greater than 1");
  } else if (guess > 100) {
    alert("please enter a number less than  100");
  } else {
    displayGuess(guess);

    if (numGuess === 11) {
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
      return;
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else {
    displayMessage(`Number is too hight`);
  }
}

function displayGuess(guess) {
  guessField.value = "";
  guesses.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  guessField.value = "";
  guessField.setAttribute("disabled", "");
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.getElementById("newGame");
  newGameButton.addEventListener("click", () => {
    randomNumber = parseInt(Math.random() * 100 + 1);

    numGuess = 1;

    guesses.innerHTML = "";
    guessField.removeAttribute("disabled");
    remaining.innerHTML = `${11 - numGuess}`;
    lowOrHi.innerHTML = "";
    startOver.removeChild(p);
    p.innerHTML = "";

    playGame = true;
  });
}

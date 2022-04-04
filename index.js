const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "paper" && moveTwo === "rock")
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    document.body.removeChild(outcome);
  }
};

const playGame = () => {
  resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {
  document.getElementById("player-one-move__name").textContent = moveOne;
  const imageOne = document.getElementById("player-one-move__img");
  imageOne.setAttribute("src", `./images/${moveOne}.png`);
  imageOne.setAttribute("alt", `Player One chose ${moveOne}`);

  document.getElementById("player-two-move__name").textContent = moveTwo;
  const imageTwo = document.getElementById("player-two-move__img");
  imageTwo.setAttribute("src", `./images/${moveTwo}.png`);
  imageTwo.setAttribute("alt", `Player Two chose ${moveTwo}`);

  const displayOutcome = document.createElement("p");
  displayOutcome.textContent = outcome;
  displayOutcome.id = "outcome";
  document.body.append(displayOutcome);
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);

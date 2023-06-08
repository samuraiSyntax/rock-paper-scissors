// VARIABLES
const SELECTIONS = ["🪨", "🧻", "✂️"];
const selectors = document.querySelectorAll(".selectors");
const choiceEl = document.getElementById("choice");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let userScore = 0;
let computerScore = 0;

// FUNCTIONS
const updateScore = (choice, selector) => {
  if (userScore >= 2 || computerScore >= 2) {
    userScore >= 2
      ? alert("Game Over! You Won 🙌")
      : alert("Game Over! You Lost🙂");

    userScore = 0;
    computerScore = 0;
  } else {
    if (choice == "🪨" && selector == "🧻") {
      userScore++;
    } else if (choice == "🪨" && selector == "✂️") {
      computerScore++;
    } else if (choice == "✂️" && selector == "🪨") {
      userScore++;
    } else if (choice == "✂️" && selector == "🧻") {
      computerScore++;
    } else if (choice == "🧻" && selector == "🪨") {
      computerScore++;
    } else if (choice == "🧻" && selector == "✂️") {
      userScore++;
    } else {
      return;
    }
  }
  userScoreEl.innerText = userScore;
  computerScoreEl.innerText = computerScore;
};

const generateComputerChoice = (selector) => {
  let choice = SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)];
  console.log(choice);
  choiceEl.innerText = choice;
  updateScore(choice, selector);
};

// EVENT LISTENERS
selectors.forEach((selector) => {
  selector.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    generateComputerChoice(e.target.innerText);
  });
});

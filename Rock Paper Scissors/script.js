
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randInx = Math.floor(Math.random() * 3);
    return options[randInx];
    //rock,paper,scissors
};


const drawGame = () => {
    msg.innerText = "Game was Draw . Play again.";
    msg.style.backgroundColor = "#191913";
};


const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "rgb(15, 160, 15)";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You loss  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "rgb(218, 34, 34)";
    }
};


const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
});


const newButton1 = document.querySelector('#bt1');


newButton1.addEventListener('click', function () {

    window.location.href = '../..//index.html';
});

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
    resetGame();
});

function resetGame() {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = "0";
    compScorePara.innerText = "0";
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#000"; 
  }
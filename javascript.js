// // make variable
// let computerChoice;
// let playerChoice = '';
// // Scoreboard
// let pscore = 0;
// let cscore = 0;

// //make function for player to choose
// const rock = document.querySelector('#rock');
// rock.addEventListener('click', () => {
//     playerChoice = "rock";
//     console.log(playerChoice);
//     computerChoice = getComputerChoice();
//     console.log(computerChoice);
//     play(playerChoice, computerChoice)
// });

// const paper = document.querySelector('#paper');
// paper.addEventListener('click', () => {
//     playerChoice = "paper";
//     console.log(playerChoice);
//     computerChoice = getComputerChoice();
//     console.log(computerChoice);
//     play(playerChoice, computerChoice)
// });

// const scissors = document.querySelector('#scissors');
// scissors.addEventListener('click', () => {
//     playerChoice = "scissors";
//     console.log(playerChoice);
//     computerChoice = getComputerChoice();
//     console.log(computerChoice);
//     play(playerChoice, computerChoice)
// });

// // make function to make computer choose
// function getComputerChoice() {
//     // Choosing random number from 0 to 1
//     let computer = Math.random();
//     // if the number less or equal to 0.33 then it will choose Rock
//     if (computer <= 0.33) {
//         computerChoice = "Rock";
//         return computerChoice;
//     }
//     // if the number less or equal to 0.66 then it will choose Paper
//     else if (computer <= 0.66) {
//         computerChoice = "Paper";
//         return computerChoice;
//     }
//     // if the number more than 0.66 then it will choose Scissors
//     else {
//         computerChoice = "Scissors";
//         return computerChoice;
//     }
// }

// // make function to play RPS
// function play(playerChoice, computerChoice) {
//     // If statement condition of game rules
//     if (playerChoice === "rock" && computerChoice === "Scissors") {
//         console.log("You Win!, Rock Beats Scissors");
//         pscore += 1;
//     }
//     else if (playerChoice === "paper" && computerChoice === "Rock") {
//         console.log("You Win!, Paper Beats Rock");
//         pscore += 1;
//     }
//     else if (playerChoice === "scissors" && computerChoice === "Paper") {
//         console.log("You Win!, Scissors Beats Paper");
//         pscore += 1;
//     }
//     else if (playerChoice === "rock" && computerChoice === "Paper") {
//         console.log("You Lose!, Paper beats Rock");
//         cscore += 1;
//     }
//     else if (playerChoice === "paper" && computerChoice === "Scissors") {
//         console.log("You Lose!, Scissors beats Paper");
//         cscore += 1;
//     }
//     else if (playerChoice === "scissors" && computerChoice === "Rock") {
//         console.log("You Lose!, Rock beats Scissors");
//         cscore += 1;
//     }
//     else {
//         console.log("Tie Game")

//     }
//     // Show the current score
//     console.log(`player = ${pscore} computer = ${cscore}`);
// }

// // make function to run 5 Game RPS
// // function game() {
// //     // loop the program until i = 5
// //     for (let i = 0; i < 5; i++) {
// //         // Take result of computerChoice
// //         computerChoice = getComputerChoice();
// //         // take Result of player choice
// //         playerChoice = getPlayerChoice();
// //         // Run the RPS Game
// //         play(playerChoice, computerChoice);
// //     }
// //     // Deciding who win or lose by score
// //     if (pscore > cscore) {
// //         console.log(`You win! overall score you ${pscore} computer ${cscore}`)
// //     }
// //     else if (pscore < cscore) {
// //         console.log(`You Lose! overall score you ${pscore} computer ${cscore}`)
// //     }
// //     else {
// //         console.log(`Tie Game! overall score you ${pscore} computer ${cscore}`)
// //     }
// // }

// const playGame = document.querySelector('#play');
// playGame.addEventListener('click', () => {
//     let i = 0;
//     console.log('start');
//     while (i < 5) {
//         // Take result of computerChoice
//         computerChoice = getComputerChoice();
//         // take Result of player choice
//         if (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors') {
//             play(playerChoice, computerChoice);
//             playerChoice = '';
//         }
//         i++;
//     }
//     // Deciding who win or lose by score
//     if (pscore > cscore) {
//         console.log(`You win! overall score you ${pscore} computer ${cscore}`)
//     }
//     else if (pscore < cscore) {
//         console.log(`You Lose! overall score you ${pscore} computer ${cscore}`)
//     }
//     else {
//         console.log(`Tie Game! overall score you ${pscore} computer ${cscore}`)
//     }
// });

let computerChoice;
let playerChoice;
let pscore = 0;
let cscore = 0;

// make function to make computer choose
function getComputerChoice() {
    // Choosing random number from 0 to 1
    let computer = Math.random();
    // if the number less or equal to 0.33 then it will choose Rock
    if (computer <= 0.33) {
        computerChoice = "Rock";
        return computerChoice;
    }
    // if the number less or equal to 0.66 then it will choose Paper
    else if (computer <= 0.66) {
        computerChoice = "Paper";
        return computerChoice;
    }
    // if the number more than 0.66 then it will choose Scissors
    else {
        computerChoice = "Scissors";
        return computerChoice;
    }
}

// make function to play RPS
function play(playerChoice, computerChoice) {
    // If statement condition of game rules
    if (playerChoice === "rock" && computerChoice === "Scissors") {
        console.log("You Win!, Rock Beats Scissors");
        pscore += 1;
    }
    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        console.log("You Win!, Paper Beats Rock");
        pscore += 1;
    }
    else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You Win!, Scissors Beats Paper");
        pscore += 1;
    }
    else if (playerChoice === "Rock" && computerChoice === "Paper") {
        console.log("You Lose!, Paper beats Rock");
        cscore += 1;
    }
    else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You Lose!, Scissors beats Paper");
        cscore += 1;
    }
    else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You Lose!, Rock beats Scissors");
        cscore += 1;
    }
    else {
        console.log("Tie Game")

    }
    // Show the current score
    console.log(`player = ${pscore} computer = ${cscore}`);
}

function playGame() {
    let i = 0;
    const rock = document.createElement('button');
    rock.classList.add = 'rock';
    rock.textContent = 'Rock'
    const paper = document.createElement('button');
    paper.classList.add = 'paper';
    paper.textContent = 'Paper';
    const scissors = document.createElement('button');
    scissors.classList.add = 'scissors';
    scissors.textContent = 'Scissors'

    container.appendChild(rock);
    container.appendChild(paper);
    container.appendChild(scissors);


    rock.addEventListener('click', () => {
        playerChoice = 'Rock';
        console.log(playerChoice);
        computerChoice = getComputerChoice();
        play(playerChoice, computerChoice);
        i++;
        console.log(i);
        endGame();
    });
    paper.addEventListener('click', () => {
        playerChoice = 'Paper';
        console.log(playerChoice);
        computerChoice = getComputerChoice();
        play(playerChoice, computerChoice);
        i++;
        console.log(i);
        endGame();
    });
    scissors.addEventListener('click', () => {
        playerChoice = 'Scissors';
        console.log(playerChoice);
        computerChoice = getComputerChoice();
        play(playerChoice, computerChoice);
        i++;
        console.log(i);
        endGame();
    });

    function endGame() {
        if (i == 5) {
            // Deciding who win or lose by score
            if (pscore > cscore) {
                console.log(`You win! overall score you ${pscore} computer ${cscore}`)
            }
            else if (pscore < cscore) {
                console.log(`You Lose! overall score you ${pscore} computer ${cscore}`)
            }
            else {
                console.log(`Tie Game! overall score you ${pscore} computer ${cscore}`)
            }
            const tryAgain = document.createElement('button');
            tryAgain.classList.add = 'tryagain';
            tryAgain.textContent = 'Try Again?'
            container.removeChild(rock);
            container.removeChild(paper);
            container.removeChild(scissors);
            container.appendChild(tryAgain);

            tryAgain.addEventListener('click', () => {
                container.removeChild(tryAgain);
                playGame();
            });
        }
        else {
            return;
        }
    }

}



const container = document.querySelector('#container');

//make play button
const playButton = document.createElement('button');
playButton.classList.add = 'play';
playButton.textContent = 'Play Game';
container.appendChild(playButton);
playButton.addEventListener('click', () => {
    container.removeChild(playButton);
    playGame();
})
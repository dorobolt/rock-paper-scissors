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
    let gameText = document.querySelector('.gtext')
    // If statement condition of game rules
    if (playerChoice === "rock" && computerChoice === "Scissors") {
        console.log("You Win!, Rock Beats Scissors");
        gameText.textContent = "You Win!, Rock Beats Scissors";
        pscore += 1;
        playerScore.textContent = `Player = ${pscore}`;
        computerScore.textContent = `Computer = ${cscore}`;
    }
    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        console.log("You Win!, Paper Beats Rock");
        gameText.textContent = "You Win!, Paper Beats Rock";
        pscore += 1;
        playerScore.textContent = `Player = ${pscore}`;
        computerScore.textContent = `Computer = ${cscore}`;
    }
    else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You Win!, Scissors Beats Paper");
        gameText.textContent = "You Win!, Scissors Beats Paper";
        pscore += 1;
        playerScore.textContent = `Player = ${pscore}`;
        computerScore.textContent = `Computer = ${cscore}`;
    }
    else if (playerChoice === "Rock" && computerChoice === "Paper") {
        console.log("You Lose!, Paper beats Rock");
        gameText.textContent = "You Lose!, Paper beats Rock";
        cscore += 1;
        playerScore.textContent = `Player = ${pscore}`;
        computerScore.textContent = `Computer = ${cscore}`;
    }
    else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You Lose!, Scissors beats Paper");
        gameText.textContent = "You Lose!, Scissors beats Paper";
        cscore += 1;
        playerScore.textContent = `Player = ${pscore}`;
        computerScore.textContent = `Computer = ${cscore}`;
    }
    else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You Lose!, Rock beats Scissors");
        gameText.textContent = "You Lose!, Rock beats Scissors";
        cscore += 1;
        playerScore.textContent = `Player = ${pscore}`;
        computerScore.textContent = `Computer = ${cscore}`;
    }
    else {
        console.log("Tie Game")
        gameText.textContent = "Tie Game";
        playerScore.textContent = `Player = ${pscore}`;
        computerScore.textContent = `Computer = ${cscore}`;

    }
    // Show the current score
    console.log(`player = ${pscore} computer = ${cscore}`);
}

function playGame() {
    let i = 0;
    pscore = 0;
    cscore = 0;

    // Adding all button to the game
    playerScore.textContent = `Player = ${pscore}`;
    computerScore.textContent = `Computer = ${cscore}`;

    let gameText = document.querySelector('.gtext');
    gameText.textContent = 'Choose Rock, Paper or Scissors';

    const rock = document.createElement('button');
    rock.classList.add('rock');
    rock.textContent = 'Rock'
    const paper = document.createElement('button');
    paper.classList.add('paper');
    paper.textContent = 'Paper';
    const scissors = document.createElement('button');
    scissors.classList.add('scissors');
    scissors.textContent = 'Scissors'

    const gameChoice = document.querySelector('#choice');
    gameChoice.appendChild(rock);
    gameChoice.appendChild(paper);
    gameChoice.appendChild(scissors);

    // give event to every button
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
                gameText.textContent = `You win!`;
            }
            else if (pscore < cscore) {
                console.log(`You Lose! overall score you ${pscore} computer ${cscore}`)
                gameText.textContent = `You Lose!`;
            }
            else {
                console.log(`Tie Game! overall score you ${pscore} computer ${cscore}`)
                gameText.textContent = `Tie Game!`;
            }
            const tryAgain = document.createElement('button');
            tryAgain.classList.add('play');
            tryAgain.textContent = 'Try Again?'
            // removing al button to change it into try again button
            gameChoice.removeChild(rock);
            gameChoice.removeChild(paper);
            gameChoice.removeChild(scissors);
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
let playerScore = document.querySelector('.pscore');
let computerScore = document.querySelector('.cscore');

//make play button
const playButton = document.createElement('button');
playButton.classList.add('play');
playButton.textContent = 'Play Game';
container.appendChild(playButton);
playButton.addEventListener('click', () => {
    container.removeChild(playButton);
    let gameText = document.createElement('div');
    gameText.classList.add('gtext');
    gameText.textContent = 'Choose Rock, Paper or Scissors';

    const choice = document.createElement('div');
    choice.id = "choice";

    container.appendChild(gameText);
    container.appendChild(choice);
    playGame();
})
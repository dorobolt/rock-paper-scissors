// make variable
let computer;
let player;
let computerChoice;
let playerChoice;
// Scoreboard
let pscore = 0;
let cscore = 0;

//make function for player to choose
function getPlayerChoice() {
    // summon prompt to input choice
    player = prompt("Choose Rock Paper or Scissors");
    // turn choice into lowercase
    playerChoice = player.toLowerCase();
    console.log(playerChoice);
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
        return playerChoice;
    }
    else {
        console.log("Please Choose Only Rock, Paper or Scissors");
        getPlayerChoice();
    }

}
// make function to make computer choose
function getComputerChoice() {
    // Choosing random number from 0 to 1
    computer = Math.random();
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
        console.log(`player = ${pscore} computer = ${cscore}`);
    }
    else if (playerChoice === "paper" && computerChoice === "Rock") {
        console.log("You Win!, Paper Beats Rock");
        pscore += 1;
        console.log(`player = ${pscore} computer = ${cscore}`);
    }
    else if (playerChoice === "scissors" && computerChoice === "Paper") {
        console.log("You Win!, Scissors Beats Paper");
        pscore += 1;
        console.log(`player = ${pscore} computer = ${cscore}`);
    }
    else if (playerChoice === "rock" && computerChoice === "Paper") {
        console.log("You Lose!, Paper beats Rock");
        cscore += 1;
        console.log(`player = ${pscore} computer = ${cscore}`);
    }
    else if (playerChoice === "paper" && computerChoice === "Scissors") {
        console.log("You Lose!, Scissors beats Paper");
        cscore += 1;
        console.log(`player = ${pscore} computer = ${cscore}`);
    }
    else if (playerChoice === "scissors" && computerChoice === "Rock") {
        console.log("You Lose!, Rock beats Scissors");
        cscore += 1;
        console.log(`player = ${pscore} computer = ${cscore}`);
    }
    else {
        console.log("Tie Game")
        console.log(`player = ${pscore} computer = ${cscore}`);
    }
}

// make function to run 5 Game RPS
function game() {
    for (let i = 0; i < 6; i++) {
        // Take result of computerChoice
        computerChoice = getComputerChoice();
        // take Result of player choice
        playerChoice = getPlayerChoice();
        // Run the RPS Game
        play(playerChoice, computerChoice);
    }
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
}
// play the game
game()



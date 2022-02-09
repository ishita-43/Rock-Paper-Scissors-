const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS= 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt('${ROCK}, ${PAPER} or ${SCISSORS}?',"").toUpperCase();
    if(
        selectiion !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
        ){
            alert('Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you');
        return;
        }
        return  selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    } else if ( randomValue < 0.67){
        return PAPER;
    } else {
        return SCISSORS;
    }
};

// ANOTHER WAY  FOR WRITING ANONYMOUS FUNCTION IS BY REMOVING FUNCTION AND AFTER ARGUMENT WRITE ARROW ITS CALLED ARROW FUCNTION 
// MUST STORE IN SOME VARIABLE  BIT SORTER , 
const getWinner = (cChoice, pChoice) => {
    // CAN OMMIT RETURN WORD AS IT RETUN ONLY ONE STATEMENT 
    cChoice === pChoice 
        ? RESULT_DRAW
        :  ( cChoice === PAPER && pChoice === ) ||
        cChoice === SCISSORS && pChoice === PAPER ||
        cChoice === ROCK && pChoice === SCISSORS
        ? RESULT_COMPUTER_WINS
        : RESULT_PLAYER_WINS
    // {
    
    
    // if(cChoice === pChoice){
    //     return RESULT_DRAW;
    // } else if ( 
    //     cChoice === PAPER && pChoice === ROCK ||
    //     cChoice === SCISSORS && pChoice === PAPER ||
    //     cChoice === ROCK && pChoice === SCISSORS
    // ){
    //     return RESULT_COMPUTER_WINS;
    // } else RESULT_PLAYER_WINS;
};

startGameBtn.addEventListner('click', () => {
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    // console.log(playerSelection);
    const computerChoice = getComputerChoice();
    let winner;
    if(playerChoice){
        winner = getWinner(computerChoice , playerChoice);
    } else{
        winner = getWinner(computerChoice);
    }
    // console.log(winner);
    
    let message = 'You picked ${playerChoice}, computer picked ${computerChoice}, therefore you ';
    if(winner === RESULT_DRAW){
        message = message + 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS){
        message = message + 'won.';
    } else (winner === RESULT_COMPUTER_WINS){
        message = messaage + 'lost.';
    }
    alert(message);
    gameIsRunning = false;
});


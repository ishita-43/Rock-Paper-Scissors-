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
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`,"").toUpperCase();
    if(
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
        ){
            alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you`);
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
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
    // CAN OMMIT RETURN WORD AS IT RETUN ONLY ONE STATEMENT 
    cChoice === pChoice 
        ? RESULT_DRAW
        :  (cChoice === ROCK && pChoice === PAPER ) ||
        (cChoice === PAPER && pChoice === SCISSORS )||
        (cChoice === SCISSORS && pChoice === ROCK)
        ? RESULT_PLAYER_WINS
        : RESULT_COMPUTER_WINS;
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


startGameBtn.addEventListener('click', () => {
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
    
    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
    if(winner === RESULT_DRAW){
        message = message + 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS){
        message = message + 'win.';
    } else {
        message = message + 'lost.';
    }
    alert(message);
    gameIsRunning = false;
});

//  NOT RELATED TO GAME

// const sumUp = (a,b,...numbers) => {
//     // available only inside of this fumction acan be any tyoe of function inside fumction
//     const validateNumber = (number) =>{
//         return isNaN(number) ? 0 : number;

//     };
//     let sum = 0;
//     for(const num of numbers){
//         sum+=validateNumber(num);
//     }
//     return sum;
// };

// const subtractUp = function (){
//     let sum = 0;
//     for(const num of argument){ // don't use it 
//         sum-=num;
//     }
//     return sum;
// };

// // console.log(sumUp([1,5,10,-3,6,10]));
// console.log(sumUp(1,5,10,-3,6,10));
// console.log(subtractUp(29,-4,2333,5,67,10));

// ... spread operator in array or in object when use to copy the valuse in another object instead of manuplating it in the same array.
// ... rest operator always the last argument and only one rest parameter in that merges all argument into an array inside of an function
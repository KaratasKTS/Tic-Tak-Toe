const boxes = document.querySelectorAll('.box').forEach( box => box.addEventListener('click', handleEvent, evalBoard));

// IIFE HOLDING PRIVATE OBJECTS AND METHODS  
let init = (() => {
    let score = { playerOne: true  , playerTwo : false };
    let gameboard = [] ; 
   
   for( let i=0; i !==3 ;  i++ ){
       gameboard[i] = [];
       for(let j = 0; j < 3; j++)
        gameboard[i][j] = '';
   
   }
    console.log(gameboard);
    
    const truePlayerOne = () => score.playerOne = true;
    const truePlayerTwo = () => score.playerTwo = true;
    const falsePlayerOne = () => score.playerOne = false;
    const falsePlayerTwo = () => score.playerTwo = false;
    return {score , gameboard, truePlayerOne, truePlayerTwo, falsePlayerOne, falsePlayerTwo };
   
   })()
/* gets the boxes event and target atributes check player status and edits array with either X OR O,
NEED TO MAKE  APPEND TO DOM TOO 
*/
function handleEvent(event) {
    const { score, gameboard, truePlayerOne, truePlayerTwo, falsePlayerOne, falsePlayerTwo } = init;
    let boxed = event.target;
    let row = boxed.getAttribute('data-row');
    let col = boxed.getAttribute('data-col');


    if (score.playerOne === true) {
        
        if (gameboard[row][col] === '') {
            gameboard[row][col] = 'X'; 
            falsePlayerOne(); 
            evalBoard();
            console.log(gameboard);
        }
    } else {
        
        if (gameboard[row][col] === '') {
            gameboard[row][col] = 'O'; 
            truePlayerOne(); 
            evalBoard();
            console.log(gameboard);
        }
    }
}

// WIN EVALUATOR, this counts equates epty boxes as a match, need fix 
function evalBoard (){
    const {gameboard} = init;

if (gameboard[0][0] === gameboard[0][1] && gameboard[0][1] === gameboard[0][2]||
    gameboard[1][0] === gameboard[1][1] && gameboard[1][1] === gameboard[1][2]||
    gameboard[2][0] === gameboard[2][1] && gameboard[2][1] === gameboard[2][2]){
    console.log('yay horizontal matched ') 
    } 

    if (gameboard[0][0] === gameboard[1][1] && gameboard[1][1] === gameboard[2][2]||
        gameboard[2][0] === gameboard[1][1] && gameboard[1][1] === gameboard[0][2]){
    console.log('yay crosses matched ') 
    }
    if(gameboard[0][0] === gameboard[1][0] && gameboard[1][0] === gameboard[2][0]||
       gameboard[0][1] === gameboard[1][1] && gameboard[1][1] === gameboard[2][1]||
       gameboard[0][2] === gameboard[1][2] && gameboard[1][2] === gameboard[2][2]){
        console.log('yay vertical matched ') 
       }
       if (gameboard[0][0] !== gameboard[0][1] && gameboard[0][1] !== gameboard[0][2]||
        gameboard[1][0] !== gameboard[1][1] && gameboard[1][1] !== gameboard[1][2]||
        gameboard[2][0] !== gameboard[2][1] && gameboard[2][1] !== gameboard[2][2]||
        gameboard[0][0] !== gameboard[1][1] && gameboard[1][1] !== gameboard[2][2]||
        gameboard[2][0] !== gameboard[1][1] && gameboard[1][1] !== gameboard[0][2]||
        gameboard[0][0] !== gameboard[1][0] && gameboard[1][0] !== gameboard[2][0]||
        gameboard[0][1] !== gameboard[1][1] && gameboard[1][1] !== gameboard[2][1]||
        gameboard[0][2] !== gameboard[1][2] && gameboard[1][2] !== gameboard[2][2]
    ){
        console.log('its a tie')
        } 
    }

    
    
       
    
        
   
   


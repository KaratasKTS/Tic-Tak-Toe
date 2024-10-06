const boxes = document.querySelectorAll('.box').forEach( box => box.addEventListener('click', handleEvent, evalBoard));
const scorePlayer1 = document.querySelector('.scorePlayer1');
const scorePlayer2 = document.querySelector('.scorePlayer2');

// IIFE HOLDING PRIVATE OBJECTS AND METHODS  
let init = (() => {
    let score = { playerOne: true };
    let gameboard = [] ; 
   
   for( let i=0; i !==3 ;  i++ ){
       gameboard[i] = [];
       for(let j = 0; j < 3; j++)
        gameboard[i][j] = null;
   
   }
    console.log(gameboard);
    
    const truePlayerOne = () => score.playerOne = true;
    
    const falsePlayerOne = () => score.playerOne = false;
    
    return {score , gameboard, truePlayerOne,  falsePlayerOne };
   
   })();

function handleEvent(event) {
    const { score, gameboard, truePlayerOne,  falsePlayerOne, } = init;
    let boxed = event.target;
    let row = boxed.getAttribute('data-row');
    let col = boxed.getAttribute('data-col');


    if (score.playerOne === true) {
        
        if (gameboard[row][col] !== 'X' || '') {
            gameboard[row][col] = 'X'; 
            falsePlayerOne(); 
            evalBoard();
            boxed.innerHTML = 'X';
            console.log(gameboard);
        }
    } else {
        
        if (gameboard[row][col] !== 'X' || '')  {
            gameboard[row][col] = 'O'; 
            truePlayerOne(); 
            evalBoard();
            boxed.innerHTML = 'O';
            console.log(gameboard);
        }
    }
}

// WIN EVALUATOR
function evalBoard (){
    const {gameboard} = init;
      const {
        player1Wins,
        player2Wins,
    } = callWin;
        if (gameboard[0][0] === 'X'  &&  gameboard[0][1]=== 'X' &&  gameboard[0][2] === 'X'){
            console.log('yay X wins') ;
            player1Wins();
            
            } else if ( gameboard[0][0] === 'O'  &&  gameboard[0][1]=== 'O' &&  gameboard[0][2] === 'O'){
                console.log('yay O wins') ;
            }
        
            if (gameboard[0][0] === 'X' &&  gameboard[1][1] === 'X' &&  gameboard[2][2] === 'X'||
                gameboard[2][0] === 'X' && gameboard[1][1] === 'X' && gameboard[0][2] ==='X'){
                
                    console.log('yay X wins') ;
                    
            
                }else if (gameboard[0][0] === 'O' &&  gameboard[1][1] === 'O' &&  gameboard[2][2] === 'O'||
                      gameboard[2][0] === 'O' && gameboard[1][1] === 'O' && gameboard[0][2] ==='O'){
                        console.log('yay O wins') ;
                }
           
             if(gameboard[0][0] === 'X' && gameboard[1][0] === 'X' && gameboard[2][0] ==='X'||
               gameboard[0][1] === 'X' && gameboard[1][1] ==='X' && gameboard[2][1]==='X'||
               gameboard[0][2] === 'X' && gameboard[1][2] === 'X' && gameboard[2][2]==='X'){
                console.log('yay X wins') ;
                
              
            } else if (gameboard[0][0] === 'O' && gameboard[1][0] === 'O' && gameboard[2][0] ==='O'||
                gameboard[0][1] === 'O' && gameboard[1][1] ==='O' && gameboard[2][1]==='O'||
                gameboard[0][2] === 'O' && gameboard[1][2] === 'O' && gameboard[2][2]==='O'){
                    console.log('yay O wins') ;
               }
              
            
            }

            const callWin = (() => {
                
                let player1Score = 0;
                let player2Score = 0;

                const player1Wins = () => {
                    player1Score++;
                    updateScores();
                };
            
                
                const player2Wins = () => {
                    player2Score++;
                    updateScores();
                };
            
               
                const updateScores = () => {
                    scorePlayer1.textContent = player1Score;
                    scorePlayer2.textContent = player2Score; 
                };
            
                
                return {
                    player1Wins,
                    player2Wins,
                };
            })();
            

function cleanUp (){
const { gameboard} = init;
 for(let i = 0; i < 3; i++ ){
    gameboard[i] = [];
    for( let j = 0; j<3; j++ )
        gameboard[i][j] = '';
    
 }

}

    
    
       
    
        
   
   


const boxes = document.querySelectorAll('.box');
boxes.forEach( box => box.addEventListener('click', handleEvent));
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
   
   function cleanUp(){
    const { gameboard} = init;
     for(let i = 0; i < 3; i++ ){
        gameboard[i] = [];
        for( let j = 0; j<3; j++ )
            gameboard[i][j] = '';

       let nick = Array.from(boxes).forEach(box => box.innerHTML = '');
       
        
        console.log('lol');
        
        
     }
    
    }

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
            
            setTimeout(cleanUp, 500);
            
            
            } else if ( gameboard[0][0] === 'O'  &&  gameboard[0][1]=== 'O' &&  gameboard[0][2] === 'O'){
                console.log('yay O wins') ;
                player2Wins();
                setTimeout(cleanUp, 500);
            }
        
            if (gameboard[0][0] === 'X' &&  gameboard[1][1] === 'X' &&  gameboard[2][2] === 'X'||
                gameboard[2][0] === 'X' && gameboard[1][1] === 'X' && gameboard[0][2] ==='X'){
                
                    console.log('yay X wins') ;
                    player1Wins();
                    setTimeout(cleanUp, 500);
            
                }else if (gameboard[0][0] === 'O' &&  gameboard[1][1] === 'O' &&  gameboard[2][2] === 'O'||
                      gameboard[2][0] === 'O' && gameboard[1][1] === 'O' && gameboard[0][2] ==='O'){
                        console.log('yay O wins') ;
                        player2Wins();
                        setTimeout(cleanUp, 500);
                }
           
             if(gameboard[0][0] === 'X' && gameboard[1][0] === 'X' && gameboard[2][0] ==='X'||
               gameboard[0][1] === 'X' && gameboard[1][1] ==='X' && gameboard[2][1]==='X'||
               gameboard[0][2] === 'X' && gameboard[1][2] === 'X' && gameboard[2][2]==='X'){
                console.log('yay X wins') ;
                player1Wins();
                setTimeout(cleanUp, 500);
              
            } else if (gameboard[0][0] === 'O' && gameboard[1][0] === 'O' && gameboard[2][0] ==='O'||
                gameboard[0][1] === 'O' && gameboard[1][1] ==='O' && gameboard[2][1]==='O'||
                gameboard[0][2] === 'O' && gameboard[1][2] === 'O' && gameboard[2][2]==='O'){
                    console.log('yay O wins') ;
                    player2Wins();
                    setTimeout(cleanUp, 500);
               }
              
            
            };

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
            
            function changeName(){
            
            const test = document.querySelector('.player-input');
            const test2 = document.querySelector('.player-input2');
            const inputSection = document.querySelector('.PlayerInput');
            const input = document.querySelector('.change');
            const input1 = document.querySelector('.change2');
            input1.innerHTML='';
            let nick2 = test2.value;
            let textNode2 = document.createTextNode(nick2);
            input1.appendChild(textNode2);
            
            let nick = test.value; 
            let textNode = document.createTextNode(nick);
            input.innerHTML='';

            input.appendChild(textNode);
            inputSection.setAttribute('class', 'PlayerInputnNone');
            
             console.log(nick);
            
            };
            
            



    
    
       
    
        
   
   


let init = (() => {
    let score = { playerOne: 0 , playerTwo : 0};
    let gameboard = [] ; 
   
   for( let i=0; i !==3 ;  i++ ){
       gameboard[i] = [];
       for(let j = 0; j < 3; j++)
        gameboard[i][j] = null;
   
   }
    console.log('it happent');
    
    const incrementPlayerOne = () => score.playerOne++;
    const incrementPlayerTwo = () => score.playerTwo++; 
    return {score , gameboard, incrementPlayerOne, incrementPlayerTwo };
   
   })()

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

    
    
       
    
        
   evalBoard();
   


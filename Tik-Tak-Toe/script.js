let init = (() => {
    let score = { playerOne: 0 , playerTwo : 0};
    let gameboard = [] ; 
   
   for( let i=0; i !==3 ;  i++ ){
       gameboard[i] = [];
       for(let j = 0; j < 3; j++)
        gameBoard[i][j] = null;
   
   }
    console.log('it happent')
    const incrementPlayerOne = () => score.playerOne++;
    const incrementPlayerTwo = () => score.playerTwo++; 
    return {score , gameboard, incrementPlayerOne, incrementPlayerTwo };
   
   })()

   
   
   


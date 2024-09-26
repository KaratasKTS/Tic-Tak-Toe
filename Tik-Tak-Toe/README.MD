/* logic


nests the game board and the scoring variables, inits on page load

gameBoard(){
 let score = { playerOne:0; , playerTwo : 0;};
 let gameBoard = [] ; 

for( let i=0; i !==3 ;  i++ ){
    gameboard[i] = [];

}
 
 const incrementPlayerOne = () => score.playerOne++;
 const incrementPlayerTwo = () => score.playerTwo++; 
 return {score , gameBoard, incrementPlayerOne, incrementPlayerTwo };

}();



listener that onclick checks possible combinations ' remember to return the board and get 
access  

evaluator(){
    //logic 
    Horizontal Wins

    Top Row: AX1, A2, A3
    Middle Row: B1, B2, B3
    Bottom Row: C1, C2, C3

Vertical Wins

    Left Column: A1, B1, C1
    Middle Column: A2, B2, C2
    Right Column: A3, B3, C3

Diagonal Wins

    Top-Left to Bottom-Right: A1, B2, C3
    Top-Right to Bottom-Left: A3, B2, C1

}





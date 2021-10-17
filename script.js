function gameBoard(){
    let board = ["1",2,3,4,5,6,7,8,9];

    this.getGameboard = function(){
        let fixBoard =  board[0] + board[1] + board[2] + "\n" +
                        board[3] + board[4] + board[5] + "\n" +
                        board[6] + board[7] + board[8];
        console.log(fixBoard);
        return fixBoard;
    }
}

function gameFlow(firstPlayerChoices, secondPlayerChoices){
    this.showDecisions = function(){
        let board = gameBoard.getGameboard();
        console.log(firstPlayerChoices);
        for(i=0; i < board.length; i++){
            if(firstPlayerChoices[i] = board[i]){
               board[1] = "x";
               console.log("called");
            }
        }
        return console.log(board);
    }
}

const playerFactory = (nick, marker, choices) => { 
    return {nick, marker, choices};
}

const firstPlayer = playerFactory('Gyromitte', "X", choices = [1, 4, 7]);
const secondPlayer = playerFactory('CPU', "O", choices = [2, 5, 8]);

console.log(firstPlayer.choices);
console.log(secondPlayer.choices);

gameBoard = new gameBoard();
gameBoard.getGameboard();

gameFlow = new gameFlow(firstPlayer.choices, secondPlayer.choices);
gameFlow.showDecisions();


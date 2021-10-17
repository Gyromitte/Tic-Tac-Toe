function gameBoard(Xmarks, Omarks){
    this.Xmarks = Xmarks;
    this.Omarks = Omarks;
    
    let board = ["1",2,3,4,5,6,7,8,9];

    this.getGameboard = function(){
        let fixBoard =  board[0] + board[1] + board[2] + "\n" +
                        board[3] + board[4] + board[5] + "\n" +
                        board[6] + board[7] + board[8];
        console.log(fixBoard);
        return fixBoard;
    }
}

const playerFactory = (nick, marker, choices) => { 
    return {nick, marker, choices};
}

const firstPlayer = playerFactory('Gyromitte', "X", choices = [1, 4, 7]);

console.log(firstPlayer.choices);
gameBoard = new gameBoard(3, 2);
gameBoard.getGameboard();


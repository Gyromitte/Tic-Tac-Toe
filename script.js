const playerFactory = (nick, marker, choices) => { 
    return {nick, marker, choices};
}
const firstPlayer = playerFactory('Gyromitte', "X", choices = [1, 4, 7]);
const secondPlayer = playerFactory('CPU', "O", choices = [2, 5, 8]);



function gameBoard(){
    let board = [1,2,3,4,5,6,7,8,9];

    this.getGameboard = function(){
        let fixBoard =  [board[0], + board[1], + board[2], + "\n" +
                        board[3], + board[4], + board[5], + "\n" +
                        board[6], + board[7], + board[8]];
        return fixBoard;
    }
}


function gameFlow(firstPlayerChoices){

    this.showDecisions = function(){
        let newBoard = theGameBoard.getGameboard();
        //TODO
        let j = 0;
        for(var i=0;  i < theGameBoard.getGameboard().length; i++){

            //J es un contador aparte para recorrer firsPlayerChoices y solo aumentar cuando el numero coincida

            console.log(i);
            if(firstPlayerChoices[j] == theGameBoard.getGameboard()[i]){
               console.log("indice: " + firstPlayerChoices[j]);
               newBoard.splice(i, 1, "x");

               j++;
                console.log(firstPlayerChoices[j]);
            }
        }
        console.log(theGameBoard.getGameboard());
        return console.log(newBoard);
    }
}


theGameBoard = new gameBoard();
theGameBoard.getGameboard();

theGameFlow = new gameFlow(firstPlayer.choices);
theGameFlow.showDecisions();


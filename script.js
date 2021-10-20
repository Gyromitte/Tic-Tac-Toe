const playerFactory = (nick, marker, choices) => { 
    return {nick, marker, choices};
}

const firstPlayer = playerFactory('Gyromitte', "X", choices = [7, 4, 1]);
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

function gameFlow(firstPlayerChoices, secondPlayerChoices){
    this.showDecisions = function(){
        let newBoard = theGameBoard.getGameboard();

        function displayMarkers(choices, marker){
            //Iterate trough the player choices
            for(var i=0;  i < choices.length; i++){
                if(theGameBoard.getGameboard().indexOf(choices[i]) !== -1){
                    //The board is modified to show markers in the correct positions 
                    newBoard.splice(theGameBoard.getGameboard().indexOf(choices[i]), 1, marker);
                }   
            }
        }
        
        displayMarkers(firstPlayerChoices, "x");
        displayMarkers(secondPlayerChoices, "o");
        return console.log(newBoard);
    }
}


theGameBoard = new gameBoard();
theGameBoard.getGameboard();

theGameFlow = new gameFlow(firstPlayer.choices, secondPlayer.choices);
theGameFlow.showDecisions();


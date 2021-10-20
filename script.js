var theGameBoard = document.getElementById('board');

var square = document.querySelectorAll('.square');

function gameBoard(){
    let board = [0,1,2,3,4,5,6,7,8];
    this.getGameboard = function(){
        let i = 0;
        document.querySelectorAll('.square').forEach(square =>{
        square.id = i;
        i++
        });
        return board;
    }
}

theGameBoard = new gameBoard();
theGameBoard.getGameboard();

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
        return console.log(newBoard);
    }
}

const playerFactory = (nick, marker, choices) => { 
    document.querySelectorAll('.square').forEach(square =>{
        square.addEventListener('click', e=>{
            square.textContent = "X";
            choices.push(parseInt(square.id));
            console.log(choices);
        });
    });   
    return {nick, marker, choices};
}

const firstPlayer = playerFactory('Gyromitte', "X", choices = []);
theGameFlow = new gameFlow(firstPlayer.choices);
document.querySelectorAll('.square').forEach(square =>{
    square.addEventListener('click', e=>{
        theGameFlow.showDecisions();
    });
});   







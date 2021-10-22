var theGameBoard = document.getElementById('board');
var square = document.querySelectorAll('.square');

const modal = document.getElementById('add-modal');

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

const playerFactory = (state, marker, choices) => {
    return {state, marker, choices};
}
var firstPlayer = playerFactory(state = true, "X", choices = []);
    
function gameFlow(firstPlayerChoices, state, secondChoices){
    document.querySelectorAll('.square').forEach(square =>{
        square.addEventListener('click', e=>{
            switch (state){
                case true: 
                    state = false;
                    console.log(state);
                    square.textContent = "X";
                    choices.push(parseInt(square.id));
                    theGameFlow.showDecisions();
                    break;
                case false:
                    state = true;
                    console.log(state);
                    square.textContent = "O";
                    choices.push(parseInt(square.id));
                    theGameFlow.showDecisions();
                    break;
            }
        });
    });
    this.showDecisions = function(){
        let newBoard = theGameBoard.getGameboard();
        function displayMarkers(choices, marker){
            //Iterate trough the player choices
            for(var i=0;  i < choices.length; i++){
                if(theGameBoard.getGameboard().indexOf(choices[i]) !== -1){
                    //The board is modified to show markers in the correct positions 
                    newBoard.splice(theGameBoard.getGameboard().indexOf(choices[i]), 1, marker);
                    console.log(choices);
                }   
            }
        }
                if (!state){
                    displayMarkers(firstPlayerChoices, "x");
                }
                if(state){
                    displayMarkers(secondChoices, "o");
                }

        return console.log(newBoard);
    }
}

theGameFlow = new gameFlow(firstPlayer.choices, firstPlayer.state, firstPlayer.choices);









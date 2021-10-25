var theGameBoard = document.getElementById('board');
var square = document.querySelectorAll('.square');
const modal = document.getElementById('add-modal');
const modalContent = document.getElementById('modal-content');

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

const createPlayers = {
    init:  function(state, marker, choices){
        this.state = state;
        this.marker = marker;
        this.choices = choices;
    }
}

let firstPlayer =  Object.create(createPlayers);
firstPlayer.init(true, "X", choices = []);

let secondPlayer =  Object.create(createPlayers);
secondPlayer.init(true, "O", choices = []);

function gameFlow(choices, state, secondChoices){
    document.querySelectorAll('.square').forEach(square =>{
        square.addEventListener('click', e=>{
            //After every click the state will change to rotate the markers
            switch (state){
                case true: 
                    state = false;
                    square.textContent = "X";
                    firstPlayer.choices.push(parseInt(square.id));
                    theGameFlow.showDecisions();
                    break;
                case false:
                    state = true;
                    square.textContent = "O";
                    secondPlayer.choices.push(parseInt(square.id));
                    theGameFlow.showDecisions();
                    break;
            }

        }, {once:true});
       
    });

    this.showDecisions = function(){
        let newBoard = theGameBoard.getGameboard();
        let fixSecondChoices = secondChoices;

        function checkWinCondition(selections, marker, newBoard){
            let gameOver;
            console.log(selections);
            const winConditions = [
                [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],
                [1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]
            ];
            //TODO add a draw condiiton
            for(var i=0; i < winConditions.length; i++){      
                if (selections.filter(function (elem) {
                    return winConditions[i].indexOf(elem) > -1;
                }).length == winConditions[i].length
                ){  
                    modal.style.display = "flex";
                    modalContent.textContent = marker + " Wins!";
                    console.log(winConditions[i]);
                    console.log("Win! to: "+ marker);
                    gameOver = true;
                }
                if(newBoard.every(i => (typeof i === "string") && !gameOver)){
                    modal.style.display = "flex";
                    modalContent.textContent = "It's a draw";
                }
            }
        }

        function displayMarkers(choices, marker){
            //Iterate trough the player choices
            if(!state){
                for(var i=0;  i < choices.length; i++){
                    if(theGameBoard.getGameboard().indexOf(choices[i]) !== -1){
                        //The board is modified to show markers in the correct positions 
                        newBoard.splice(theGameBoard.getGameboard().indexOf(choices[i]), 1, marker);
                        checkWinCondition(choices, "X", newBoard);
                    }   
                }
            }
            if(state){
                for(var i=0;  i < fixSecondChoices.length; i++){
                    if(theGameBoard.getGameboard().indexOf(fixSecondChoices[i]) !== -1){
                        //The board is modified to show markers in the correct positions 
                        newBoard.splice(theGameBoard.getGameboard().indexOf(fixSecondChoices[i]), 1, marker);
                        checkWinCondition(choices, "O", newBoard);
                    }   
                }
            }

        }
            if(!state){
                    displayMarkers(choices, "X");
            }
            if(state){
                    displayMarkers(fixSecondChoices, "O");
            }
        return console.log(newBoard);
    }

}

theGameFlow = new gameFlow(firstPlayer.choices, firstPlayer.state, secondPlayer.choices);
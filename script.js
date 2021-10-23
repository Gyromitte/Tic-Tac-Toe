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
        });
    });

    this.showDecisions = function(){
        let newBoard = theGameBoard.getGameboard();
        let fixSecondChoices = secondChoices;
        function displayMarkers(choices, marker){
            //Iterate trough the player choices
            if(!state){
                for(var i=0;  i < choices.length; i++){
                    if(theGameBoard.getGameboard().indexOf(choices[i]) !== -1){
                        //The board is modified to show markers in the correct positions 
                        newBoard.splice(theGameBoard.getGameboard().indexOf(choices[i]), 1, marker);
                    }   
                }
            }
            if(state){
                for(var i=0;  i < fixSecondChoices.length; i++){
                    if(theGameBoard.getGameboard().indexOf(fixSecondChoices[i]) !== -1){
                        //The board is modified to show markers in the correct positions 
                        newBoard.splice(theGameBoard.getGameboard().indexOf(fixSecondChoices[i]), 1, marker);
                    }   
                }
            }

        }
            if(!state){
                    displayMarkers(choices, "X");
                    console.log(choices);
            }
            if(state){
                    displayMarkers(fixSecondChoices, "O");
                    console.log(fixSecondChoices);
            }
        return console.log(newBoard);
    }
}

theGameFlow = new gameFlow(firstPlayer.choices, firstPlayer.state, secondPlayer.choices);









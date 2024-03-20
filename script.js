
let gameContune = true; // While this value is true the while loop will not end

let validMoves = ["r", "s", "p"]; // This array contains all accepted moves for the game and is used to check for correspondoing moves in userInput

let computermoves =["r", "s", "p"]; // This array contains the computer's moves and a value is randomly selected. P could be replaced with anything and the game will still run and assume p is chosen
// could be possible to expand array with more elements to change random weight so long as new elements contain "r", "s", or ***

// This object contains stats for the game logging activity as it happens
let gamestats = {
    wins: 0,
    losses: 0,
    draws: 0, 
    rock: 0,
    scisors: 0,
    paper: 0,
    // inValidMoves: 0,
};

// The variable funtion findWinner checks the userInput and computerInput to determine if there is a winner.
// Note: if alternative inputs escape validation they will return as p for paper in either userInput or computerInput
// returns drawn won or lost to the gameresult and increments wether the player played r, s or p and increments wins losses or draws
const findWinner = function(userInput, computerInput){
    if (userInput === "r"){
        gamestats.rock++;
        if (computerInput === "r"){
            gamestats.draws++;
            return "drawn";            
        }else if(computerInput === "s"){
            gamestats.wins++;
            return "won";
        }else {
            gamestats.losses++;
            return "lost";
        }
    } else if (userInput === "s"){
        gamestats.scisors++;
        if (computerInput === "r"){
            gamestats.losses++;
            return "lost";
        }else if(computerInput === "s"){
            gamestats.draws++;
            return "drawn";
        }else {
            gamestats.wins++;
            return "won";
        }
    } else {
        gamestats.paper++;
        if (computerInput === "r"){
            gamestats.wins++;
            return "won";
        }else if(computerInput === "s"){
            gamestats.losses++;
            return "lost";
        }else {
            gamestats.draws++;
            return "drawn";
        }
    }
}

// The while loop holds the active parts of the game
while (gameContune){
    console.log(`game is running`); //counter to determin game is running
    let userInput = prompt("Select r, s, or p"); // Creates prompt screen with input field asking for r s or p
    if (validMoves.includes(userInput)){  // checks user input against valid moves, continues if a valid move or moves to else if invalid
        let computerInput = computermoves[Math.floor(Math.random() * 4)]; // Randomly selects r, s or p for computer moves
        let gameResult = findWinner(userInput, computerInput);    //runs function findWinner with variables userInput and computerInput
        alert(`You have ${gameResult}`);        //Provides alert with the return from findWinner on if they have Won lost or drawn
    }else {     //If user does not give a valid input
        alert(`Invalid move, type r s or p in lower case to continue`); //An alert letting the user know there last move was invalid
    }
    let continueConfirm = confirm("Play again?"); //displays a popup checking if the user wants to contnue
        if (!continueConfirm){ //if the value is false ie: they press cancel, 
            gameContune = false; //Changes gamecontinue to false, ending the while loop
            alert(`Wins:${gamestats.wins} \n Draws:${gamestats.draws} \n Losses:${gamestats.losses} \n Rocks:${gamestats.rock} \n Scisors:${gamestats.scisors} \n Papers:${gamestats.paper}`)
        }
}

console.log(gamestats); //prints the gamestats to the console


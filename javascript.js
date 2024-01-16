//prompt user input - input is passed to playerSelection()
function playerSelection() {return prompt("Choose: Rock, Paper, or Scissors");}

//populates computer's choices
function getComputerChoice() {
    let num = (Math.floor(Math.random()*99))
    if (num <= 33){
        return "Rock";
    }
    else if (num <= 66){
        return "Paper";
    }
    else {
        return "Scissors";
    };
}

function play(x, y) {

//normalizes all responses to lower case
let playSel = x.toLowerCase();
let compSel = y.toLowerCase();

//if playSel is a valid response, tests for winner
if (playSel === "rock" || playSel === "paper" || playSel === "scissors"){

    //if player and computer selections are the same, reprompts for input from both users.
    if (playSel == compSel){
        return play(playerSelection(), getComputerChoice());
        //if both users select different options, tests for a winner and outputs appropriate response
        } else if(playSel == "rock" && compSel == "scissors"){
            return `You Win! ${x} beats ${y}!`;
        } else if(playSel == "rock" && compSel == "paper"){
            return `You Lose! ${y} beats ${x}!`;
        } else if(playSel == "paper" && compSel == "rock"){
            return `You Win! ${x} beats ${y}!`;
        } else if(playSel == "paper" && compSel == "scissors"){
            return `You Lose! ${y} beats ${x}!`;
        } else if(playSel == "scissors" && compSel == "paper"){
            return `You Win! ${x} beats ${y}!`;
        } else if(playSel == "scissors" && compSel == "rock"){
            return `You Lose! ${y} beats ${x}!`;
            }
}
//if player input is not a valid response, re-prompts for selection from both users
else {
    return play(playerSelection(), getComputerChoice());
    }
};

function game() {

    //create arrays to track scores of each player sepeartely
    const playScore = [];
    const compScore = [];

    //checks return value strings - all strings containing "Win" push a I tally to player score
    for(let i = 0; i < 5; i++){
        let x = play(playerSelection(), getComputerChoice())
        if(x.includes("Win")){
            playScore.push("I")
        } else {
            compScore.push("I")
        }
        //turns each array to a string
        const playTxt = playScore.toString("");
        const compTxt = compScore.toString("");

        //prints return value from play()
        console.log(x);

        //prints stringified score array from this function (game())
        console.log(`Player Score: ${playTxt} | Computer Score: ${compTxt}`);

    }

    //checks for the longer array length (higher score) after the game is played 5 times
    if (playScore.length > compScore.length){
        console.log("You win!");
     } else {
        console.log("You lose!");
     }
    };

game();
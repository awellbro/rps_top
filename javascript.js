//adding UI-------------------------------------------------------------------------------------------------

const butt = document.querySelectorAll("button");
    const playScore = [];
    const compScore = [];

    butt[0].addEventListener('click', ()=>{
        const scoreUl = document.querySelector("ul");
        const scoreLi = document.createElement("li");

        let a = play("rock", getComputerChoice());

        scoreLi.textContent = a;
        scoreUl.appendChild(scoreLi);
        keepCount(a)

    });
    butt[1].addEventListener('click', ()=>{
        const scoreUl = document.querySelector("ul");
        const scoreLi = document.createElement("li");

        let b = play("paper", getComputerChoice());

        scoreLi.textContent = b;
        scoreUl.appendChild(scoreLi);
        keepCount(b)
    });
    butt[2].addEventListener('click', ()=>{
        const scoreUl = document.querySelector("ul");
        const scoreLi = document.createElement("li");

        let c = play("scissors", getComputerChoice());

        scoreLi.textContent = c;
        scoreUl.appendChild(scoreLi);
        keepCount(c)
    });

function keepCount(x){
    const total = document.querySelectorAll('li');
    const scoreDiv = document.querySelector('#result');
    const scoreBoard = document.querySelector('#score');

        if(total.length < 5){
            if(x.includes('Win')){
                playScore.push('I');
                scoreBoard.textContent = (`Player: ${playScore} | Computer: ${compScore}`);
            } else {
                compScore.push('I');
                scoreBoard.textContent = (`Player: ${playScore} | Computer: ${compScore}`);
            }
        } else {
            if (playScore.length > compScore.length){
                scoreDiv.textContent = ("You win!");
                replay();
             } else {
                scoreDiv.textContent = ("You lose!");
                replay();
             }
        };
};

function replay(){

}

/*
    if (x.includes('Win')){
        playScore.push("I");
    } else {
        compScore.push("I");
    }

    console.log(`player: ${playScore}`);
    console.log(`comp: ${compScore}`);


const total = document.querySelectorAll("li");
const totalArr = Array.from(total);
const totalText = totalArr.textContent;
console.log(totalText);

/*
if(total.length == 5){
    console.log(Array.from(total))
    //document.querySelector('div').textContent = "Done";
}
*/

//----------------------------------------------------------------------------------------------------------
//prompt user input - input is passed to playerSelection()
//function playerSelection() {return prompt("Choose: Rock, Paper, or Scissors");}

//populates computer's choices
function getComputerChoice() {
    let num = (Math.floor(Math.random()*99))
    if (num <= 33){
        return "rock";
    }
    else if (num <= 66){
        return "paper";
    }
    else {
        return "scissors";
    };
}

function play(x, y) {

//normalizes all responses to lower case
let playSel = x;
let compSel = y;

//if playSel is a valid response, tests for winner
//if (playSel === "rock" || playSel === "paper" || playSel === "scissors"){

    //if player and computer selections are the same, reprompts for input from both users.
    if (playSel == compSel){
        return play(x, getComputerChoice());
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
//else {
 //   return play(playerSelection(), getComputerChoice());
 //   }
//};
/*
function game(a) {

    //create arrays to track scores of each player sepeartely
    const playScore = [];
    const compScore = [];

    //checks return value strings - all strings containing "Win" push a I tally to player score
    for(let i = 0; i < 5; i++){
        let playRes = a;
        if(playRes.includes("Win")){
            playScore.push("I")
        } else {
            compScore.push("I")
        }
        //turns each array to a string
        const playTxt = playScore.toString("");
        const compTxt = compScore.toString("");

        //prints return value from play()
        console.log(playRes);

        //prints stringified score array from this function (game())
        console.log(`Player Score: ${playTxt} | Computer Score: ${compTxt}`);

    }

    //checks for the longer array length (higher score) after the game is played 5 times. prints result to console.
    if (playScore.length > compScore.length){
        console.log("You win!");
     } else {
        console.log("You lose!");
     }
    };

//(game())();
*/
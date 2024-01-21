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

        if(total.length <= 5){
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
                offButt();
             } else {
                scoreDiv.textContent = ("You lose!");
                offButt()
             }
        };
};

function offButt(){
   const removeRock = document.getElementById('rock');
   const removePaper = document.getElementById('paper');
   const removeScissors = document.getElementById('scissors');

   removeRock.remove();
   removePaper.remove();
   removeScissors.remove();
};
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

let playSel = x;
let compSel = y;

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
};
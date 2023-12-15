function playerSelection() {return prompt("Choose: Rock, Paper, or Scissors");}
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
let playSel = x.toLowerCase();
let compSel = y.toLowerCase();
if (playSel === "rock" || playSel === "paper" || playSel === "scissors"){
    if (playSel == compSel){
        return play(playerSelection(), getComputerChoice());
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
    }}
else {
    return play(playerSelection(), getComputerChoice());
    }
};

function game() {
    const playScore = [];
    const compScore = [];
    for(let i = 0; i < 5; i++){
        let x = play(playerSelection(), getComputerChoice())
        if(x.includes("Win")){
            playScore.push("I")
            console.log(x);
        } else {
            compScore.push("I")
            console.log(x);
        }
        console.log(`Player Score: ${playScore} | Computer Score: ${compScore}`);
        

    }
    if (playScore.length > compScore.length){
        return "You win!"
     } else {
        return "You lose!"
     }
    };

console.log(game());
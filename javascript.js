const playerSelection = prompt("Choose: Rock, Paper, or Scissors");
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let num = (Math.floor(Math.random()*100))
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
    document.write(`Player: ${x}, Comp: ${y}: `);

    if (playSel == compSel){
        return "Tie!"
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
    return `${x} is not a recognized value, please try again.`;
    }
};

document.write(play(playerSelection, computerSelection));


//document.write(playerSelection, computerSelection);

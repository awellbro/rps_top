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
 console.log(playSel, compSel);
};

play(playerSelection, computerSelection);

//document.write(playerSelection, computerSelection);

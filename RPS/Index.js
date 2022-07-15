let computerChoiceDisplay = document.getElementById("computer_choice");
let userChoiceDisplay = document.getElementById("user_choice");
let resultDisplay = document.getElementById("result");
let buttons = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

buttons.forEach(display => display.addEventListener("click", (e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    generateResult();
}))

function generateComputerChoice(){
    const random_number = Math.floor(Math.random() * 3 + 1);

    if (random_number === 1) {
        computerChoice = 'rock';
    }else if(random_number === 2){
        computerChoice = 'paper'
    }else{
        computerChoice = 'scissor';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}
function generateResult(){
    if(userChoice === computerChoice){
        result = 'Its a draw';
    }else if(userChoice == 'rock' && computerChoice == 'scissor' || userChoice == 'paper' && computerChoice == 'rock' 
             || userChoice == 'scissor' && computerChoice == 'paper'){
        result = "You win";
    }else{
        result = "You lose"; 
    }
    resultDisplay.innerHTML = result;
}


const compChoice = document.getElementById('compChoice');
const userChoice = document.getElementById('userChoice');
const result = document.getElementById('Result');
const PossibleChoices = document.querySelectorAll('button');

PossibleChoices.forEach(btns => btns.addEventListener('click', (e)=>{
    let userPick = e.target.id;
    let random = Math.floor(Math.random() * 3);
    let choices = ['Rock', 'Paper', 'Scissor'];
    compChoice.innerHTML = choices[random];
    userChoice.innerHTML = userPick;
    
    resulDisplay(userPick, random, choices);
}))

function resulDisplay(userPick, random, choices){
    if( userPick == 'Rock' && choices[random] == 'Scissor' || 
        userPick == 'Paper' && choices[random] == 'Rock' ||
        userPick == 'Scissor' && choices[random] == 'Paper'){
            result.innerHTML = "You Won";
        }else if(
        userPick == 'Rock' && choices[random] == 'Paper' || 
        userPick == 'Paper' && choices[random] == 'Scissor' ||
        userPick == 'Scissor' && choices[random] == 'Rock'
        ){
            result.innerHTML = "You Lost";
        }else{
            result.innerHTML = "Its a tie";
        }
}
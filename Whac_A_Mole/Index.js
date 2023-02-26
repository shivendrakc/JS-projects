const display = document.querySelector(".grid");

for(let i = 1;  i <= 9; i++){
    const box = document.createElement("div")
    box.setAttribute("class", "square");
    box.setAttribute("id", i);
    display.appendChild(box);
}

const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score"); 
let result = 0;
let hitPosition;
let countDown = 60;

function randomSquare(){
    squares.forEach(box => {
        box.classList.remove('mole');
    })

    let randomPosition = squares[Math.floor(Math.random()*9)]
    randomPosition.classList.add("mole");

    hitPosition = randomPosition.id;
}

squares.forEach(square => {
    square.addEventListener("mousedown", ()=>{
        if (square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})


function moveMole(){
    let timerId = null;
    timerId = setInterval(randomSquare, 500);
}

moveMole();

// create a timer

function timer(){
    countDown--;
    timeLeft.textContent = countDown;

    if (countDown == 0){
        clearInterval(Clock)
        alert("Times up !!! Here is your final score "+result);
    }
}

let Clock = setInterval(timer, 1000);
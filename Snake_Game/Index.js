let direction = {x : 0, y : 0};
const foodSound = new Audio('music/food.mp3');
const gameoverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x : 13, y: 15 }
]

function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime);

    if ((ctime - lastPaintTime)/1000 > 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
function gameEngine(){
    //Part 1 : Updaeting the snake variable

    //part 2 : Display the sanke and food
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement = document.style.gridRowStart = e.y;
        snakeElement = document.style.gridColumnStart = e.x;
        snakeElement.classList.add('food');
        board.appendChild(snakeElement);
    })
}







window.requestAnimationFrame(main);
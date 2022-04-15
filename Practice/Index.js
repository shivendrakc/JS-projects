const Start = document.querySelector('.start');
const Stop = document.querySelector('.stop');
let i = 0; 
const number = document.querySelector(".number");


const Increase = ()=>{
    console.log(i++);
}
Start.addEventListener("click", ()=>{
    console.log(i);
    request = setInterval(Increase, 100);
    number.textContent = request;
})

Stop.addEventListener('click', ()=>{
    clearInterval(request);
})


 
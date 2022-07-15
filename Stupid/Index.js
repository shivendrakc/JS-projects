let btn_yes = document.querySelector(".Yes");
let btn_no = document.querySelector(".No");
let h1_2 = document.getElementById("h1-2");
let getRandom = Math.floor(Math.random() * (100-60) + 60) + "px";

btn_yes.addEventListener("click", ()=>{
    h1_2.classList.add("show-item");
})

    btn_no.addEventListener("click", ()=>{
        btn_no.style.left = getRandom;
        
    })    

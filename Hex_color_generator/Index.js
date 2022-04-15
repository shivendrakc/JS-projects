const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const hex_Color = document.querySelector(".hex_color");

btn.addEventListener("click", () =>{
    let hexColor = "#";
    for (let i = 0; i < 6; i++){
        hexColor += hex[randomNumber()]
    }
    hex_Color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function randomNumber(){
    return Math.floor(Math.random() * hex.length);
}
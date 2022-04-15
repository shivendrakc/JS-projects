let screen = document.getElementById('screen');
let button = document.querySelectorAll('button');
let screenValue = '';

for (items of button){
    items.addEventListener('click', (e)=>{
        button_text = e.target.innerText;
        console.log("buttontext is ", button_text)
        if (button_text == 'C'){
            screenValue = ''
            screen.value = screenValue
        }
        else if (button_text == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += button_text
            screen.value = screenValue;
        }
    })
}
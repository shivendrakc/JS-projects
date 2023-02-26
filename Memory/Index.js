const cardArray = [
    {
        name: 'fries',
        img : 'Images/fries.png',
    },
    {
        name: 'cheeseburger',
        img : 'Images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img : 'Images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img : 'Images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img : 'Images/milkshake.png',
    },
    {
        name: 'pizza',
        img : 'Images/pizza.png',
    },
    //repeat
    {
        name: 'fries',
        img : 'Images/fries.png',
    },
    {
        name: 'cheeseburger',
        img : 'Images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img : 'Images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img : 'Images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img : 'Images/milkshake.png',
    },
    {
        name: 'pizza',
        img : 'Images/pizza.png',
    }
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardChoosen = [];
let cardChoosenId = [];
const cardsWon = [];

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement("img");
        card.setAttribute("src", "Images/blank.png");
        card.setAttribute("data-id", i);
        gridDisplay.appendChild(card);
        card.addEventListener("click", flipCard);
    }
}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll("img");
    const optionOneId = cardChoosenId[0];
    const optionTwoId = cardChoosenId[1];
    
    if (optionOneId == optionTwoId){
        alert("Click another card you dum dum");
        cards[optionOneId].setAttribute("src", "Images/blank.png");
    }
    if(cardChoosen[0] == cardChoosen[1] && optionOneId != optionTwoId){
        alert("Bitch you found a match")
        cards[optionOneId].setAttribute("src", "Images/white.png");
        cards[optionTwoId].setAttribute("src", "Images/white.png");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardsWon.push(cardChoosen);
    }else{
        cards[optionOneId].setAttribute("src", "Images/blank.png");
        cards[optionTwoId].setAttribute("src", "Images/blank.png");
    }
    resultDisplay.innerHTML = cardsWon.length;
    cardChoosenId = [];
    cardChoosen = [];

    if(cardsWon.length == cardArray.length/2){
        alert("You found em all");
    }
}

function flipCard(){
    const cardId = this.getAttribute("data-id");
    cardChoosen.push(cardArray[cardId].name);
    cardChoosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardChoosen.length === 2){
        setTimeout(checkMatch, 500);
    }
}
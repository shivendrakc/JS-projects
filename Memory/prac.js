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
const cardChoosen = [];
const cardChoosenId = [];

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        let card = document.createElement("img");
        card.setAttribute("src", "Images/blank.png");
        card.setAttribute("data-id", i);
        gridDisplay.appendChild(card);
        card.addEventListener("click", flipCard)
    }
}
createBoard();

function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardChoosen.push(cardArray[cardId].name);
    cardChoosenId.push(cardId);
    console.log(cardChoosen, cardChoosenId);
    this.setAttribute('src', cardArray[cardId].img);
}


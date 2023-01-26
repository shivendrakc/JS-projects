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

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
const cardChoosen = [];
const cardsChoosenIds = [];

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'Images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);
    }
}
createBoard();


function checkMatch(){
    const cards = document.querySelectorAll('img');

    if (cardChoosen[0] == cardChoosen[1]){
        alert("You Found A Macth");
        cards[cardsChoosenIds[0]].setAttribute('src', ' Images/white.png');
    }
}
function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardChoosen.push(cardArray[cardId].name);
    cardsChoosenIds.push(cardId)
    console.log(cardChoosen, cardsChoosenIds);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardChoosen.length === 2){
        setTimeout( checkMatch, 500)
    }
}
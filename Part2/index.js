

const cardFace = document.getElementById('card-face')
const cardColor = document.getElementById('card-color')

function setCard(){
    const card = document.getElementById(cardFace.value);
    card.style.color = cardColor.value
    console.log(card)
    cardFace.value = ''
    cardColor.value = ''
}

function reset(){
    const resetColor = document.getElementsByTagName('section')
    for(i = 0; i < resetColor.length; i++){
        resetColor[i].style.color = 'gray'
    }
}

let sum =0 
let message = ""
let hasBlackJack = false
let isAlive = false
let cards = []
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//query selector instead of getElementById("sum-el")
//let sumEl = document.querySelector("sum-el")
let cardsEl =  document.getElementById("cards-el")

let player ={
    "Name":"roaa",
    "Chips":145
}

 let playerEl = document.getElementById("player-el")
 playerEl.textContent = player.Name + ": $"+player.Chips



let getRandomCard = ()=> {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

let startGame = ()=> {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard() 
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}



let renderGame = ()=>{

    cardsEl.textContent = "cards: " 
    for(let c of cards) {
        cardsEl.textContent +=  c +"   "
    }
    sumEl.textContent =  "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
            hasBlackJack = true
    } else {
        message = "You're out of the game!"
            isAlive = false
    }
    messageEl.textContent = message
}

let newCard = () => {
    if (isAlive === true && hasBlackJack === false) {
    let card =  getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}
const board = []

function play(clickedId){
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)

    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }
    console.log(board)
    
    const topLeft = board[0]
    const topCenter = board[1]
    const topRight = board[2]
    const midLeft = board[3]
    const midCenter = board[4];
    const midRight = board[5]
    const bottomLeft = board[6]
    const bottomCenter = board[7]
    const bottomRight = board[8]
    
    if(topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
        alert (`${topLeft} is the winner!`)
    }
    if(midLeft !== undefined && midLeft === midCenter && midLeft === midRight){
        alert(`${midLeft} is the winner!`)
    }
    if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
        alert(`${bottomLeft} is the winner!`)
    }
    if(topLeft !== undefined && topLeft === midLeft && topLeft === bottomLeft){
        alert(`${topLeft} is the winner!`)
    }
    if(topCenter !== undefined && topCenter === midCenter && topCenter === bottomCenter){
        alert(`${topCenter} is the winner!`)
    }
    if(topRight !== undefined && topRight === midRight && topRight === bottomRight){
        alert(`${topRight} is the winner!`)
    }
    if(topLeft !== undefined && topLeft === midCenter && topLeft === bottomRight){
        alert(`${topLeft} is the winner!`)
    }
    if(topRight !== undefined && topRight === midCenter && topRight === bottomLeft){
        alert(`${topRight} is the winner!`)
    }
    console.log(board)

    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
          boardFull = false;
        }
      }
      if (boardFull === true) {
        alert("Cat's game, there is no winner");
      }
}

function reset(){
    if(alert === true){
        board
    }
}
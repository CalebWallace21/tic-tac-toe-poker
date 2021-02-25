let board = [];

function play (clickedId) {
const playerSpan = document.getElementById('player')
const clickedElement = document.getElementById(clickedId)
if (playerSpan.innerText === 'X') {
    board[clickedId] = 'X'
    clickedElement.innerText = 'X'
    playerSpan.innerText = 'O'
}
else {
    board[clickedId] = 'O'
    playerSpan.innerText = 'X'
    clickedElement.innerText = 'O'
}


let topLeft = board[0];
let topMiddle = board[1];
let topRight = board[2];
let midLeft = board[3];
let center = board[4];
let midRight = board[5];
let botLeft = board[6];
let botMid = board[7];
let botRight = board[8];


if (topRight !== undefined && topRight === topCenter && topRight === topLeft) {
    alert(`${topRight} is the winner`);
    return;
}
else if (topLeft !== undefined && topLeft === midLeft && topLeft === botLeft) {
    alert(`${topLeft} is the winner`);
    return;
}
else if (topLeft !== undefined && topLeft === center && topLeft === botRight) {
    alert(`${topLeft} is the winner`);
    return;
}
else if (topMiddle !== undefined && topMiddle === center && topMiddle === botMid) {
    alert(`${topMiddle} is the winner`);
    return;
}
else if (topRight !== undefined && topRight === midRight && topRight === botRight) {
    alert(`${topRight} is the winner`);
    return;
}
else if (topRight !== undefined && topRight === center && topRight === botLeft) {
    alert(`${topRight} is the winner`);
    return;
}
else if (midLeft !== undefined && midLeft === midRight && midLeft === center) {
    alert(`${midLeft} is the winner`);
    return;
}
else if (botRight !== undefined && botRight === botLeft && botRight === botMid) {
    alert(`${botRight} is the winner`);
    return;
}

let boardFull = true
for (let i = 0; i < 9; i++) {
    if (board[i] === undefined) {
        boardFull = false;
    }
}
if (boardFull === true) {
    alert("Cat's Game");
    }
}


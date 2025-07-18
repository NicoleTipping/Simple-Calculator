let display = document.querySelector('#display');
let operatorButtons = document.querySelectorAll('.operator');
let numberButtons = document.querySelectorAll('.number');
let equalButton = document.querySelector('#equal');
let clearButton = document.querySelector('#C');

let num1 = ""
let num2 = ""
let op
let turn = true

numberButtons.forEach((numberButton) => {numberButton.addEventListener('click', handleButClick)})

operatorButtons.forEach((operatorButton) => {operatorButton.addEventListener('click', handleOpClick)})

function handleButClick(e) {
    if(turn){
        num1 += e.target.textContent
        display.textContent = num1
    } else {
        num2 = e.target.textContent
        display.textContent += num2
    }
}

function handleOpClick(e) {
    turn = false
    op = e.target.textContent
    display.textContent += op
}

clearButton.addEventListener('click', () => {
    turn = true;
    display.textContent = 0;
})

function operate(num1, num2) {
    switch(op) {
        case "+":
            return num1 + num2
            break;
        case "-":
            return num1 - num2
            break;
        case "*":
            return num1 * num2
            break;
        case "/":
            return num1 / num2
            break;
    }
}

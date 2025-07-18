let display = document.querySelector('#display');
let operatorButtons = document.querySelectorAll('.operator');
let numberButtons = document.querySelectorAll('.number');
let equalButton = document.querySelector('#equal');
let clearButton = document.querySelector('#C');

let num1
let num2
let op
let value


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
};


numberButtons.forEach((numberButton) => {numberButton.addEventListener('click', handleButClick)})

operatorButtons.forEach((operatorButton) => {operatorButton.addEventListener('click', handleOpClick)})

function handleButClick(e) {
    value = e.target.textContent;
}

function handleOpClick(e) {
    op = e.target.textContent
}

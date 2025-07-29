let display = document.querySelector('#display');
let operatorButtons = document.querySelectorAll('.operator');
let numberButtons = document.querySelectorAll('.number');
let equalButton = document.querySelector('#equal');
let clearButton = document.querySelector('#C');
let decimal = document.querySelector('#decimal');

let num1 = '', num2 = ''
let op
let turn = true
let answer = 0

numberButtons.forEach((numberButton) => { numberButton.addEventListener('click', handleButClick) })

function handleButClick(e) {
 
    if (turn) {
        num1 += e.target.textContent
        display.textContent = num1
    } else {
        num2 += e.target.textContent
        display.textContent = num2
    }
}

operatorButtons.forEach((operatorButton) => { operatorButton.addEventListener('click', handleOpClick) })

function handleOpClick(e) {
        turn = false
        op = e.target.textContent
        display.textContent = op
}

function operate(num1, num2, op) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    switch (op) {
        case "+": answer = num1 + num2
            break;
        case "-": answer = num1 - num2
            break;
        case "*": answer = num1 * num2
            break;
        case "/": answer = num1 / num2
            if (num2 == 0) {
                display.textContent = 'Infinity'
            }
            break;
    }
    display.textContent = answer
}

clearButton.addEventListener('click', () => {
    display.textContent = '0'
    answer = 0
    num1 = ''
    num2 = ''
    turn = true;
})

equalButton.addEventListener('click', () => {
    operate(num1, num2, op)
    num1 = answer
    num2 = ''
})

decimal.addEventListener('click', () => {
    if (display.textContent.includes('.')) {
        decimal.style.pointerEvents = 'none';
    }
})

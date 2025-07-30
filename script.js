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

decimal.addEventListener('click', () => {
    if (display.innerHTML.includes('.')) {
        decimal.disabled = true;
    }
})

operatorButtons.forEach((operatorButton) => { operatorButton.addEventListener('click', handleOpClick) })

function handleOpClick(e) {
    if (num1 && num2 && op) {
        operate(num1, num2, op)
        num2 = ''
        num1 = answer
        op = e.target.textContent
        decimal.disabled = false
    } else {
        turn = false
        op = e.target.textContent
        display.textContent = op
        decimal.disabled = false
    }
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
    display.textContent = Math.round(answer * 100) / 100
}

clearButton.addEventListener('click', () => {
    display.textContent = '0'
    answer = 0
    num1 = ''
    num2 = ''
    turn = true
    decimal.disabled = false
})

equalButton.addEventListener('click', () => {
    operate(num1, num2, op)
    num1 = answer
    num2 = ''
    decimal.disabled = false
})
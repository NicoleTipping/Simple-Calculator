let display = document.querySelector('#display');
let operatorButtons = document.querySelectorAll('.operator');
let numberButtons = document.querySelectorAll('.number');
let equalButton = document.querySelector('#equal');
let clearButton = document.querySelector('#C');
let decimal = document.querySelector('#decimal');

let num1 = ''
let num2 = ''
let op
let turn = true
let answer = 0
let currentValue = ''

numberButtons.forEach((numberButton) => { numberButton.addEventListener('click', handleButClick) })

operatorButtons.forEach((operatorButton) => { operatorButton.addEventListener('click', handleOpClick) })

function handleButClick(e) {
    if(display.textContent.slice(-1) == '.') {
        num1 = currentValue
        num1 += e.target.textContent
        display.textContent = num1
    }
    else if (turn) {
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
    turn = true
    display.textContent = '0'
    num1 = ''
    num2 = ''
})

function operate(num1, num2, op) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    switch (op) {
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
            if (num2 == 0) {
                display.textContent = 'Infinity'
            }
            break;
    }
}

equalButton.addEventListener('click', () => {
    answer = operate(num1, num2, op)
    num1 = Math.round(answer * 100) / 100
    display.textContent = Math.round(answer * 100) / 100
})

decimal.addEventListener('click', (e) => {
    decimal = e.target.textContent
    if (!display.innerHTML.includes('.')) {
        currentValue = display.textContent += decimal
    }
    return;
})

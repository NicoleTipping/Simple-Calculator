const displayButton = document.getElementById('display');
const operators = document.getElementsByClassName('operator');
const numberButtons = document.getElementsByClassName('number');
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('C');

let answer = 0;
let op1 = '', op2 = '';
let turn = true;
let op;

Array.from(numberButtons).forEach(element => {element.addEventListener('click', inputNumbers)} );

Array.from(operators).forEach(element => {element.addEventListener('click', takeOperation)} );

function inputNumbers() {
    var currentValue = this.textContent.trim();
    if(display.innerText == '0') {
        display.innerHTML = `<span>${currentValue}</span>`;
    }
    else
        display.innerHTML += `<span>${currentValue}</span>`;
    if(turn){
        op1 += currentValue;
    }
    else   
        op2 += currentValue;
}

function takeOperation() {
    turn = false;
    op = this.textContent.trim();
    display.innerHTML += `<span>${op}</span>`;
}

clearButton.addEventListener('click', clearAll);

function clearAll() {
    answer = 0;
    op1 = 0;
    op2 = 0;
    turn = true;
    display.innerHTML = `<span>${answer}</span>`;
}

equalButton.addEventListener('click', calculate);

function calculate() {
    op1 = parseFloat(op1); //parseFloat allows decimal parseInt will stop at a decimal or any non-numeric character
    op2 = parseFloat(op2);
    console.log('before', op1, op2);

    switch(op) {
        case '+': answer = op1 + op2;
        break;
        case "-": answer = op1 - op2; break;
        case "*": answer = op1 * op2; break;
        case "/": answer = op1 / op2;
            if (op2 == 0) {
                display.innerHTML = `<span>infinity</span>`;
                return;
            } break;
    }
    display.innerHTML = `<span>${answer} </span>`;
    op1 = answer;
    op2 = '';
    turn = true;
    
}
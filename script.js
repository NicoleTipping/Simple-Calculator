let display = document.querySelector('.display');
let operatorButton = document.querySelector('.operator');
let numberButton = document.querySelector('.number');
let equalButton = document.querySelector('.equal');
let clearButton = document.querySelector('#C');

let num1;
let num2;
let operator;

num1 = numberButton.addEventListener('click', (e) => {
    e.target.value;
});

num2 = numberButton.addEventListener('click', (e) => {
    e.target.value;
});

operator = operatorButton.addEventListener('click', (e) => {
    e.target.value;
});

// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

function operate(num1, num2, operator) {
 switch (operator) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
    };
}
// declare global variables & DOM elements to access

let operator = ''
let currentValue = ''
let previousValue = ''
let displayValue = ''

const screenDisplay = document.querySelector('.calc-display');

const clearBtn = document.querySelector('.clear-key');

const equalsBtn = document.querySelector('.equals-key');

const operators = document.querySelectorAll('.operators');

const decimalBtn = document.querySelector('.decimal-key');

const numberButtons = document.querySelectorAll('.numbers'); //array of number buttons

/* Create function to update and show displayValue in screenDisplay */
/* loop through each number & operator and append value onto screen display */

numberButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent)
    });
});

function handleNumber(num) {
    if (currentValue.length <= 9) { //curtails length of integers that user can use
        currentValue += num;
        screenDisplay.textContent = currentValue;
    }
};

operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleOperator(e.target.textContent)
    });
});

function handleOperator(ops) {
    operator = ops;
    previousValue = currentValue
    screenDisplay.textContent = previousValue + operator
    currentValue = ''
    screenDisplay.textContent = previousValue + operator + currentValue;   
};

/* Create function for calculate - remember both values currently acted and stored as string variables */
/* declare sub-functions */

function add(a, b) {
    return a + b
  }
  
  function subtract(a, b) {
    return a - b
  }
  
  function multiply(a, b) {
    return a * b
  }
  
  function divide(a, b) {
    return a / b
  }


function calculate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b)
      case '-':
        return subtract(a, b)
      case '*':
        return multiply(a, b)
      case '/':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
};


/* Create a function to display the result on the screen */

function displayResult() {
    screenDisplay.textContent = roundResult(calculate(operator, previousValue, currentValue))
};

function roundResult(num) {
    return Math.round(num * 100000) / 100000;  
}


/* add decimal function for decimal key - only allows for deicmal to be inputted once with the current value*/

function addDecimal() {
    if(!currentValue.includes('.')) {
        currentValue += '.'
        screenDisplay.textContent = currentValue;
    }
};

decimalBtn.addEventListener('click', () => {
    addDecimal();
});

/* Equals key will need to DISPLAY the result, the calculation needs to be worked out inside the function!!!*/


equalsBtn.addEventListener('click', () => {
    displayResult();
});

/* add a clear function for AC button */

const clear = () => {
    previousValue = '';
    currentValue = '';
    operator = '';
    screenDisplay.textContent = '';
};

/* add calculate function to equals key */

clearBtn.addEventListener('click', () => {
    clear();
});

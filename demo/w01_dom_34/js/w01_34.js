const userInput = document.querySelector('#input-number');

const addBtn = document.querySelector('#btn-add');
const subtract = document.querySelector('#btn-btn-subtract');
const multiply = document.querySelector('#btn-multiply');
const divide = document.querySelector('#btn-divide');

const currentCalculaitionOutput = document.querySelector('#current-calculation');
const currentResultOutput = document.querySelector('#current-result');

//console.log('userinput', userInput);
//console.log('currentCalculationOutput', currentCalculationOutput);
//console.log('currentResultOutput',currentResultOutput);

const defaulResult = 0;
let currentResult = defaulResult;

function getUserInput (){
    return parseInt (userInput.value);
}

function OutputResult(result,text){
    currentCalculaitionOutput.textContent = text;
    currentResultOutput.textContent = result;
}

function add () {
    const operand1 = currentResult ;
    const operand2 = getUserInput() ;
    //console.log(operand1, operand2, operand1 + operand2);
    currentResult = operand1 + operand2 ;
    const calText = `${operand1} + ${operand2}`
    OutputResult(currentResult, calText);
}

addBtn.addEventListener('click', add); 
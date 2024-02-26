const userInput = document.querySelector('#input-number');
const subtractBtn = document.querySelector('#btn-subtract');
const addBtn = document.querySelector('#btn-add');
// const subtract = document.querySelector('#btn-btn-subtract');
// const multiply = document.querySelector('#btn-multiply');
const divideBtn = document.querySelector('#btn-divide');
const multiplyBtn = document.querySelector('#btn-multiply');

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
    console. log(`${operand1} + ${operand2}=${currentResult}`)
    OutputResult(currentResult, calText);
}

addBtn.addEventListener('click', add); 

function subtract() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 - operand2;
    console.log(`${operand1} - ${operand2} = ${currentResult}`);
    const calText = `${operand1} - ${operand2}`;
    OutputResult(currentResult, calText);
}
subtractBtn.addEventListener("click",subtract);

function multiply() {
    console.log(currentResult)
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 * operand2;
    console.log(`${operand1} * ${operand2} = ${currentResult}`);
    const calText = `${operand1} * ${operand2}`;
    OutputResult(currentResult, calText);
}
multiplyBtn.addEventListener("click",multiply);


function divide() {
    console.log(currentResult)
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 / operand2;
    console.log(`${operand1} / ${operand2} = ${currentResult}`);
    const calText = `${operand1} / ${operand2}`;
    OutputResult(currentResult, calText);
}
divideBtn.addEventListener("click",divide);

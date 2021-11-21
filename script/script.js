const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

let selectedNumber  = [];
let firstOperand = '';
let secondOperand = '';
let op = '';
display.textContent = [''].join('');

deleteButton.addEventListener('click',deleteLastElement);
clearButton.addEventListener('click',clearAll);
numbers.forEach( (numb) => {numb.addEventListener('click',getNumber)})
operators.forEach( (operator) => {operator.addEventListener('click',updateNumbers)})

function getNumber(e){
    if (firstOperand === Infinity || isNaN(firstOperand))
        clearAll();

    if (firstOperand === ''){
        if (e.target.textContent === '.' && selectedNumber.includes('.'))
            return;
    }

    selectedNumber.push(e.target.textContent);
    updateDisplay(e.target.textContent);
}

function updateNumbers(e){
    if (selectedNumber.length > 0){

        if (firstOperand === '')
                firstOperand = selectedNumber.join('');
                
        else {
            secondOperand = selectedNumber.join('');
            firstOperand = getSolution();
            display.textContent =  firstOperand;
            if (firstOperand === Infinity || isNaN(firstOperand)){
                selectedNumber = [];
                return;
            }
            
        }
        if (e.target.textContent !== "="){
            op = e.target.textContent;
            updateDisplay(op); 
            selectedNumber = []; 
        }

        else{
            selectedNumber = Array.from(firstOperand.toString());
            firstOperand = '';
        }
            
    }
     
}
function deleteLastElement(){
    if (firstOperand === Infinity || isNaN(firstOperand)){
        clearAll();
        return;
    }
        
    let text = Array.from(display.textContent);
    let deleted = text.pop();
    if (!isNaN(deleted) || deleted === '.'){
        selectedNumber.pop();
    }
    else{
        selectedNumber = Array.from(firstOperand);
        firstOperand = '';
        op = '';
    }
    display.textContent = text.join('')

}
function updateDisplay(toBeDisplayed){
        display.textContent += toBeDisplayed;
}

function clearAll(){
    selectedNumber  = [];
    firstOperand = '';
    secondOperand = '';
    op = '';
    display.textContent = '';
}

function getSolution(){
    let sum = operate(op,Number(firstOperand),Number(secondOperand));
        if (sum.toString().length > 10)
            return Math.round(sum * 10) / 10;
    return sum;
}

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function mutiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(op,num1,num2){
    switch(op){
        case "+":
            return add(num1,num2);
            break;
        case "-":
            return subtract(num1,num2);
            break
        case "*":
            return mutiply(num1,num2);
            break;
        case "/":
            return divide(num1,num2);
            break;
        default:
            return "not an operator";
            break;
    }
}
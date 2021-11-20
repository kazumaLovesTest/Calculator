const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator");

let selectedNumber  = '';
let firstOperand = '';
let secondOperand = '';
let op = '';
display.textContent = ''


numbers.forEach((numb)=>{
    numb.addEventListener('click',()=>{
        selectedNumber += numb.textContent;
        updateDisplay(selectedNumber);
    })
})

operators.forEach((operator)=>{
    operator.addEventListener('click',updateNumbers)
})

function updateNumbers(e){
    if (selectedNumber !== ''){

        if (firstOperand === '')
                firstOperand = selectedNumber;
                
        else {
            secondOperand = selectedNumber;
            firstOperand = operate(op,Number(firstOperand),Number(secondOperand));
            display.textContent =  firstOperand;
        }

        selectedNumber = '';  
        op = e.target.textContent;
        updateDisplay(op); 
    }
     
}

function updateDisplay(toBeDisplayed){
    display.textContent += toBeDisplayed;
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
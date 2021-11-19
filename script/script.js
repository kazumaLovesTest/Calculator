let selectedNumber  = '';
const result = document.querySelector(".display");
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator");

numbers.forEach((numb)=>{
    numb.addEventListener('click',()=>{
        selectedNumber *= numb.textContent;
    })
})

operators.forEach((operator)=>{
    operator.addEventListener('click',()=>{
        let op = operator.textContent;        
    })
})

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
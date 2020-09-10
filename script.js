const output = document.querySelector("output")
const numKeys = document.querySelectorAll(".operand")
const plusKey = document.querySelector("#plus")
const minusKey = document.querySelector("#minus")
const multiplyKey = document.querySelector("#multiply")
const divideKey = document.querySelector("#divide")
const equalKey = document.querySelector("#equal")
const clearKey = document.querySelector("#clear")
const dotKey = document.querySelector("#dot")
const backspaceKey = document.querySelector("#backspace")
let displayValue = "";
let firstNum = "";
let operateValue = "";

let add = (a, b) => {
    return a + b;
}

let subtract = (a, b) => {
    return a - b;
}

let multiply = (a, b) => {
    return a * b;
}

let divide = (a, b) => {
    return a / b;
}

let operate = (o, a, b) => {
    if (o === "+") {
        return add(parseFloat(a), parseFloat(b));
    } else if (o === "-") {
        return subtract(a, b);
    } else if (o === "*") {
        return multiply(a, b);
    } else if (o === "/") {
        if (a === "0" || b === "0") {
            return "Nice try"
        } else {
            return divide(a, b);
        }
    }
}

let display = (num) => {
    displayValue += num;
    output.textContent = displayValue;
}

let clear = () => {
    firstNum = "";
    displayValue = "";
    output.textContent = "0";
}

let backspace = () => {
    displayValue = displayValue.slice(0, -1)
    output.textContent = displayValue;
}

let divider = () => {
    if (parseInt(firstNum) > 0) {
        firstNum = operate(operateValue, firstNum, displayValue);
        displayValue = ""
        output.textContent = firstNum;
        operateValue = "/";
    } else {
        operatorKey("/");
    }
}

let multiplier = () => {
    if (parseInt(firstNum) > 0) {
        firstNum = operate(operateValue, firstNum, displayValue);
        displayValue = ""
        output.textContent = firstNum;
        operateValue = "*";
    } else {
        operatorKey("*");
    }    
}

let decimaler = () => {
    if (!displayValue.includes(".")) {
        display(".");
    }
}

let additioner = () => {
    if (parseInt(firstNum) > 0) {
        firstNum = operate(operateValue, firstNum, displayValue);
        displayValue = ""
        output.textContent = firstNum;
        operateValue = "+";
    } else {
        operatorKey("+");
    }
}

let subsctracter = () => {
    if (parseInt(firstNum) > 0) {
        firstNum = operate(operateValue, firstNum, displayValue);
        displayValue = ""
        output.textContent = firstNum;
        operateValue = "-";
    } else {
        operatorKey("-");
    }
}

let equalizer = () => {
    if (isNaN(parseInt(firstNum)) || isNaN(parseInt(displayValue))) {
    } else {
        output.textContent = operate(operateValue, firstNum, displayValue);
    }
}

for (const numKey of numKeys) {
    numKey.addEventListener("click", function() {
        display(numKey.textContent);
    })
}

backspaceKey.addEventListener("click", backspace)

dotKey.addEventListener("click", decimaler);

let operatorKey = (operateSign) => {
    firstNum = displayValue;
    displayValue = "";
    output.textContent = operateSign;
    operateValue = operateSign;
}

multiplyKey.addEventListener("click", multiplier);

plusKey.addEventListener("click", additioner);

minusKey.addEventListener("click", subsctracter);

divideKey.addEventListener("click", divider);

equalKey.addEventListener("click", equalizer)

clearKey.addEventListener("click", clear)

window.addEventListener("keydown", keyDown);

function keyDown(e) {
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (key.id === "clear") {
        clear();
    } else if (key.id === "backspace") {
        backspace();
    } else if (key.id === "divide") {
        e.preventDefault();
        divider();
    } else if (key.id === "multiply") {
        multiplier();
    } else if (key.id === "minus") {
        subsctracter();
    } else if (key.id === "plus") {
        additioner();
    } else if (key.id === "equal") {
        equalizer();
    } else if (key.id === "dot") {
        decilmaler();
    } else {
        display(key.textContent)
    }
}
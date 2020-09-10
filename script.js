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

for (const numKey of numKeys) {
    numKey.addEventListener("click", function() {
        display(numKey.textContent);
    })
}

backspaceKey.addEventListener("click", function () {
    displayValue = displayValue.slice(0, -1)
    output.textContent = displayValue;
})

dotKey.addEventListener("click", function () {
    if (!displayValue.includes(".")) {
        display(".");
    }
});

let operatorKey = (operateSign) => {
    firstNum = displayValue;
    displayValue = "";
    output.textContent = operateSign;
    operateValue = operateSign;
}

multiplyKey.addEventListener("click", function () {
    if (parseInt(firstNum) > 0) {
        firstNum = operate(operateValue, firstNum, displayValue);
        displayValue = ""
        output.textContent = firstNum;
        operateValue = "*";
    } else {
        operatorKey("*");
    }
});

plusKey.addEventListener("click", function () {
    if (parseInt(firstNum) > 0) {
        firstNum = operate(operateValue, firstNum, displayValue);
        displayValue = ""
        output.textContent = firstNum;
        operateValue = "+";
    } else {
        operatorKey("+");
    }
});

minusKey.addEventListener("click", function () {
    if (parseInt(firstNum) > 0) {
        firstNum = operate(operateValue, firstNum, displayValue);
        displayValue = ""
        output.textContent = firstNum;
        operateValue = "-";
    } else {
        operatorKey("-");
    }
});

divideKey.addEventListener("click", function () {
    if (parseInt(firstNum) > 0) {
        firstNum = operate(operateValue, firstNum, displayValue);
        displayValue = ""
        output.textContent = firstNum;
        operateValue = "/";
    } else {
        operatorKey("/");
    }
});

equalKey.addEventListener("click", function () {
    if (isNaN(parseInt(firstNum)) || isNaN(parseInt(displayValue))) {
    } else {
        output.textContent = operate(operateValue, firstNum, displayValue);
    }
})

clearKey.addEventListener("click", function () {
    firstNum = "";
    displayValue = "";
    output.textContent = "0";
})
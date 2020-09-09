const output = document.querySelector("output")
const oneKey = document.querySelector("#one")
const twoKey = document.querySelector("#two")
const threeKey = document.querySelector("#three")
const fourKey = document.querySelector("#four")
const fiveKey = document.querySelector("#five")
const sixKey = document.querySelector("#six")
const sevenKey = document.querySelector("#seven")
const eightKey = document.querySelector("#eight")
const nineKey = document.querySelector("#nine")
const zeroKey = document.querySelector("#zero")
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

    oneKey.addEventListener("click", function () {
        display("1");
    });
    twoKey.addEventListener("click", function () {
        display("2");
    });
    threeKey.addEventListener("click", function () {
        display("3");
    });
    fourKey.addEventListener("click", function () {
        display("4");
    });
    fiveKey.addEventListener("click", function () {
        display("5");
    });
    sixKey.addEventListener("click", function () {
        display("6");
    });
    sevenKey.addEventListener("click", function () {
        display("7");
    });
    eightKey.addEventListener("click", function () {
        display("8");
    });
    nineKey.addEventListener("click", function () {
        display("9");
    });
    zeroKey.addEventListener("click", function () {
        display("0");
    });
    backspaceKey.addEventListener("click", function() {
        displayValue = displayValue.slice(0, 1)
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
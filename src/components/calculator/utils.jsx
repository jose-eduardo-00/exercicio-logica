function inputNum(num, setNum, e) {
    if(num === 0) {
        setNum(String(e))
    } else {
        setNum(num + String(e))
    }
}

function percentNum(num, setNum) {
    if(num === 0) {
        return
    } else {
        setNum(num/100)
    }
}

function calculate(num, operator, oldNum, setNum) {
    const num1 = parseFloat(num)
    const num2 = parseFloat(oldNum)
    if (operator === "/") {
        setNum(num2 / num1)
    } else if (operator === "+") {
        setNum(num2 + num1)
    } else if (operator === "-") {
        setNum(num2 - num1)
    } else if (operator === "*") {
        setNum(num2 * num1)
    }
}

function operatorHandler(setOperator, setOldNum, num, setNum, e) {
    setOperator(e)
    setOldNum(num)
    setNum(0)
}

function clear(setNum, setOldNum, setOperator) {
    setNum(0)
    setOldNum(0)
    setOperator()
}

export { inputNum, percentNum, calculate, operatorHandler, clear }
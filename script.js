

const add = (x, y) => {
    return x + y
}

const subtract = (x, y) => {
    return x - y
}

const multiply = (x, y) => {
    return x * y
}

const divide = (x, y) => {
    return x / y
}

function operate(operator, x, y) {
    if (operator === '+') {
        return add(x, y)
    } else if (operator === '-') {
        return subtract(x, y)
    } else if (operator === '×') {
        return multiply(x, y)
    } else if (operator === '÷') {
        if (y === 0) {
            return 'OOPS!'
        } else {
            return divide(x, y)
        }
    }
}
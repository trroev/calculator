const calculator = document.querySelector('.calculator')
const buttons = calculator.querySelector('.buttons')
const display = calculator.querySelector('.display')

buttons.addEventListener('click', event => {
    const button = event.target
    const buttonValue = button.textContent
    const displayValue = display.textContent
    const { type } = button.dataset
    const { previousButtonType } = calculator.dataset

    if (type === 'clear') {
        display.textContent = '0'
    }
    
    if (display.textContent === 'OOPS!') return

    if (type === 'number') {
        if (displayValue === '0') {
            display.textContent = buttonValue
        } else if (previousButtonType === 'operator') {
            display.textContent = buttonValue
        } else {
            display.textContent = displayValue + buttonValue
        }
    }

    if (type === 'operator') {
        const operatorButtons = buttons.querySelectorAll('[data-type="operator"]')
        operatorButtons.forEach(el => { el.dataset.state = '' })
        button.dataset.state = 'selected'
        
        calculator.dataset.firstNumber = displayValue
        calculator.dataset.operator = button.dataset.key
    }

    if (type === 'equals') {
        const firstNumber = calculator.dataset.firstNumber
        const operator = calculator.dataset.operator
        const secondNumber = displayValue
        display.textContent = operate(firstNumber, operator, secondNumber)
    }

    if (type === 'plus-minus') {
        display.textContent = (displayValue * -1).toString()
    }

    if (type === 'percent') {
        display.textContent = (displayValue / 100).toString()
    }

    calculator.dataset.previousButtonType = type
})

function operate(firstNumber, operator, secondNumber) {
    firstNumber = parseInt(firstNumber)
    secondNumber = parseInt(secondNumber)
    if (operator === 'add') return firstNumber + secondNumber
    if (operator === 'subtract') return firstNumber - secondNumber
    if (operator === 'multiply') return firstNumber * secondNumber
    if (operator === 'divide') {
        if (secondNumber !== 0) return firstNumber / secondNumber
        return 'OOPS!'
    }
}
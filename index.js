// will contain the place to write numbers
let currentOperator = null
let shouldResetScreen = false

const firstNumber = document.getElementById('first-number')
const secondNumber = document.getElementById('second-number')
const operator = document.getElementById('operator')
const equalOperator = document.getElementById('equal-operator')
const result = document.getElementById('result')

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalButton = document.getElementById('equal-btn')
const pointButton = document.getElementById('point-btn')
const clearButton = document.querySelector('.clear-btn')
const deleteButton = document.querySelector('.delete-btn')

currentOperator = result

pointButton.addEventListener('click', () => appendNumber('.'))

deleteButton.addEventListener('click', () => {
    const sliced = result.innerText.slice(0, -1)

    if (sliced === '') {
        result.innerText = '0'
    } else {
        result.innerText = sliced
    }
})

numberButtons.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.innerText))
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => setOperator(button.innerText))
})

clearButton.addEventListener('click', () => clear())

equalButton.addEventListener('click', () => {
    secondNumber.innerText = result.innerText
    equalOperator.innerText = '='
    result.innerText = evaluate(firstNumber.innerText, result.innerText, operator.innerText)
})

function appendNumber(number) {
    if (result.innerText === '0' || shouldResetScreen) {
        result.innerText = ''
        shouldResetScreen = false
    }

    currentOperator.innerText += number
}

function setOperator(operatorText) {
    firstNumber.innerText = result.innerText
    operator.innerText = operatorText

    shouldResetScreen = true
}

function clear() {
    equalOperator.innerText = ''
    firstNumber.innerText = ''
    secondNumber.innerText = ''
    operator.innerText = ''
    result.innerText = '0'
}

function evaluate(a, b, operator) {
    a = Number(a)
    b = Number(b)

    switch (operator) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '×':
            return a * b
        case '÷':
            return a / b
        default:
            return null
    }
}

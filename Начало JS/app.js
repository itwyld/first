// let num = 42; // number
// let firstName = "Daniil"; // string
// const isProgrammer = true; // bollean

// //Can do
// let $ = "test";
// let $num = 42;
// let num$ = 42;
// let _ = 49;
// let _num = 12;
// let num_ = 12;
// let first_name = 'Elena'
// let my_num = 34 // bad
// let myNum = 34 // good
// let num42 = 10

//restricted - запрещенные

// let 42num = '11'
// let my-num = 1
// let false

// firstName = "Max"; // correct
// isProgrammer = false // error because of const

// alert(firstName);
// console.log('test: ' ,num, firstName)

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)
// console.log(num)

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num
// num2 = num2 + 1
// console.log(num, num2)

// let num3 = (num + 10) * 2 / 3 - 1
// console.log(num3)

// const fullName = firstName + ' Bugorskiy'
//or
// const fullName = firstName + ' ' + 'Bugorskiy'

const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

function printResult (result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction (inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)

    // if (actionSymbol == '+') {
    //    return  num1 + num2
    // }
    // else if (actionSymbol == '-') {
    //    return  num1 - num2
    // }

    return actionSymbol == '+' ? num1 + num2 : num1 - num2
}

// const sum = Number(input1.value) + Number(input2.value)
// resultElement.textContent = sum

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)

    // if (action == '+') {
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printResult(sum)
    // } else if (action == '-') {
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult(sum)
    // }

}


// const firstInput = document.getElementById("input1")
// const secondInput = document.getElementById("input2")
// console.log(firstInput + secondInput)

// console.log(resultElement.textContent);
// resultElement.textContent = 42

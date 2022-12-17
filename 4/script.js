let btn = document.querySelector('.btn')

btn.addEventListener('click', function(){

    let firstNumber = document.querySelector('.firstNumber')
    let secondNumber = document.querySelector('.secondNumber')
    let operator = document.querySelector('.operator')
    
    let result = eval(firstNumber.value + operator.value + secondNumber.value);
    
    let resultSpan = document.querySelector('.resultSpan')

    resultSpan.innerHTML = result
})
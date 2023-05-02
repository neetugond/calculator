let numberTag = document.getElementsByClassName('keyNumber');
let operatorTag = document.getElementsByClassName('keyOperator');
let clearTag = document.getElementById('keyClear')
let displayTag = document.getElementById('text')
let equalToTag = document.getElementById("keyEqual")

let firstNumber = ""
let secondNumber =""
let isFirstNumber = true
let operators = "";

for (var i = 0; i < numberTag.length; i++){
    numberTag[i].addEventListener('click', function (e) {
        if (isFirstNumber===true) {
            firstNumber += e.target.innerText;
            displayTag.innerText = firstNumber
        } else {
            secondNumber += e.target.innerText;
            displayTag.innerText = secondNumber
        }

      
  })
}

for (var i = 0; i < operatorTag.length; i++){
    operatorTag[i].addEventListener('click', function (e) {
        isFirstNumber = false;
        operators =e.target.innerText;
            
    });
}

equalToTag.addEventListener("click", function () {
    displayTag.innerText = Calculate(firstNumber, secondNumber, operators);
})

function Calculate(firstNumber, secondNumber, operator) {
    if (operator === "+") {
       return Number(firstNumber) + Number(secondNumber)
    }else if (operator === "-" ){
        return Number(firstNumber) - Number(secondNumber)
        
    }else if (operator === "x" ){
        return Number(firstNumber) * Number(secondNumber)
        
    }else if (operator === "/" ){
        return Number(firstNumber) / Number(secondNumber)
        
    }
    
}

clearTag.addEventListener('click', function () {
displayTag.innerHTML = " "
})
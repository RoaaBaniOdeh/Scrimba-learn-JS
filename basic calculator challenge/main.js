

//document.getElementById("num").innerHTML.value


let summation = document.getElementById("summation")

let add = () => { 
let firstNum = document.getElementById("firstNum").value
let secondNum = document.getElementById("secondNum").value
summation.textContent = parseInt(firstNum) + parseInt(secondNum)
}
let subtract = () => { 
    let firstNum = document.getElementById("firstNum").value
    let secondNum = document.getElementById("secondNum").value
    summation.textContent = parseInt(firstNum) - parseInt(secondNum)
    }
let divide = () => { 
    let firstNum = document.getElementById("firstNum").value
    let secondNum = document.getElementById("secondNum").value
    summation.textContent = parseInt(firstNum) /parseInt(secondNum)
    }
let multiply = () => { 
    let firstNum = document.getElementById("firstNum").value
    let secondNum = document.getElementById("secondNum").value
    summation.textContent = parseInt(firstNum) * parseInt(secondNum)
    }

//selectors
let firstNum = document.getElementById("firstNum");
let secondNum = document.getElementById("secondNum");
let resultFiled = document.getElementById("result");

//functions
function clearFields() {
    firstNum.value = "";
    secondNum.value = "";
    resultFiled.value = "";
    resultFiled.style.display = "none";
}

function add() {
    let result = Number(firstNum.value) + Number(secondNum.value);
    resultFiled.style.display = "block";
    resultFiled.value = result;

}

function subtract() {
    let result = Number(firstNum.value) * Number(secondNum.value);
    resultFiled.style.display = "block";
    resultFiled.value = result;
}
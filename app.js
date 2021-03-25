const inputA = document.getElementById('number-A-input');
const inputB = document.getElementById('number-B-input');
const addCal = document.getElementById('add-cal');
const addOutput = document.getElementById('add-output');

addCal.addEventListener('click', () => {
    const numberA = Number(inputA.value);
    const numberB = Number(inputB.value);
    const addResult = numberA + numberB;
    addOutput.textContent = addResult;
})

const input1 = document.getElementById('number-1-input');
const input2 = document.getElementById('number-2-input');
const subCal = document.getElementById('sub-cal');
const subOutput = document.getElementById('sub-output');

subCal.addEventListener('click', () => {
    const number1 = Number(input1.value);
    const number2 = Number(input2.value);
    const subResult = number1 - number2;
    subOutput.textContent = subResult;
})
const inputX = document.getElementById('number-x-input');
const inputY = document.getElementById('number-y-input');
const multCal = document.getElementById('mult-cal');
const multOutput = document.getElementById('mult-output');

multCal.addEventListener('click', () => {
    const numberX = Number(inputX.value);
    const numberY = Number(inputY.value);
    const multResult = numberX * numberY;
    multOutput.textContent = multResult;
})
const input3 = document.getElementById('number-3-input');
const input4 = document.getElementById('number-4-input');
const divCal = document.getElementById('div-cal');
const divOutput = document.getElementById('div-output');

divCal.addEventListener('click', () => {
    const number3 = Number(input3.value);
    const number4 = Number(input4.value);
    const divResult = number3 / number4;
    divOutput.textContent = divResult;
})
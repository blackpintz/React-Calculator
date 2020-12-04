import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
    const firstNum = Big(numOne);
    const secondNum = Big(numTwo);
    let total;
    if (operation === '+') total = firstNum + secondNum
    else if (operation === '-') total = firstNum - secondNum
    else if (operation === '/') total = firstNum / secondNum
    else if (operation === '*') total = firstNum * secondNum
    
    return total
}
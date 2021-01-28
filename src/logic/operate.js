import Big from 'big.js';

export default (numOne, numTwo, operation) => {
  const firstNum = Big(numOne);
  const secondNum = numTwo === null ? '0' : Big(numTwo);
  let total;
  switch (operation) {
    case '+':
      total = firstNum.plus(secondNum);
      break;
    case '-':
      total = firstNum.minus(secondNum);
      break;
    case '/':
      if (numTwo === '0' || numTwo === 0 || secondNum === '0') {
        total = 'Infinity';
      } else {
        total = firstNum.div(secondNum);
      }
      break;
    case '*':
      total = firstNum.times(secondNum);
      break;
    case '%':
      total = numOne / 100;
      break;
    default:
      total = firstNum;
      break;
  }
  return total === 'Infinity' ? 'syntax error' : total.toPrecision();
};

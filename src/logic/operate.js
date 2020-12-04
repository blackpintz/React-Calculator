import Big from 'big.js';

export default (numOne, numTwo, operation) => {
  const firstNum = Big(numOne);
  const secondNum = Big(numTwo);
  let total;
  switch (operation) {
    case '+':
      total = firstNum.plus(secondNum);
      break;
    case '-':
      total = firstNum.minus(secondNum);
      break;
    case '/':
      total = firstNum.div(secondNum);
      break;
    case '*':
      total = firstNum.times(secondNum);
      break;
    case '%':
      total = firstNum.div(100);
      break;
    default:
      break;
  }
  return total;
};

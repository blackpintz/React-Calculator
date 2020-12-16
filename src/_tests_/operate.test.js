import operate from '../logic/operate';

let firstNum;
let secondNum;
let thirdNum;

describe('calculator operations', () => {
  beforeEach(() => {
    firstNum = '2';
    secondNum = '4';
    thirdNum = '0';
  });

  test('add operation', () => {
    const result = operate(firstNum, secondNum, '+');
    expect(result).toEqual('6');
  });

  test('minus operation', () => {
    const result = operate(firstNum, secondNum, '-');
    expect(result).toEqual('-2');
  });

  test('multiply operation', () => {
    const result = operate(firstNum, secondNum, '*');
    expect(result).toEqual('8');
  });

  test('divide operation', () => {
    const result = operate(firstNum, secondNum, '/');
    expect(result).toEqual('0.5');
  });

  test('divide operation for when second value is zero', () => {
    const result = operate(firstNum, thirdNum, '/');
    expect(result).toEqual('syntax error');
  });
});

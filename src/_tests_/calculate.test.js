import Calculator from '../logic/calculate';

describe('calculator', () => {
  test('calculate when equals sign is pressed', () => {
    const newData = {
      total: '12',
      next: '4',
      operation: '*',
    };
    const result = Calculator({ total: '3', next: '4', operation: '*' }, '=');
    expect(result).toEqual(newData);
  });

  test('calculate when +/- sign is pressed', () => {
    const newData = {
      total: -5,
      next: null,
      operation: null,
    };
    const result = Calculator({ total: '5', next: null, operation: null }, '+/-');
    expect(result).toEqual(newData);
  });

  test('calculate when AC is pressed', () => {
    const newData = {
      total: null,
      next: null,
      operation: null,
    };
    const result = Calculator({ total: '5', next: '2', operation: '*' }, 'AC');
    expect(result).toEqual(newData);
  });

  test('calculte when . is pressed', () => {
    const newData = {
      total: '3',
      next: '6.',
      operation: '*',
    };
    const result = Calculator({ total: '3', next: '6', operation: '*' }, '.');
    expect(result).toEqual(newData);
  });

  test('calculate when % is pressed', () => {
    const newData = {
      total: '3',
      next: 0.06,
      operation: '*',
    };

    const result = Calculator({ total: '3', next: '6', operation: '*' }, '%');
    expect(result).toEqual(newData);
  });

  test('calculate when a number like 7 is pressed', () => {
    const newData = {
      total: '3',
      next: '67',
      operation: '*',
    };

    const result = Calculator({ total: '3', next: '6', operation: '*' }, '7');
    expect(result).toEqual(newData);
  });
});

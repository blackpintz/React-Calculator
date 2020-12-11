import React, { useState } from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculator from '../logic/calculate';

function App() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [display, setDisplay] = useState('0');

  const handleClick = name => {
    const result = Calculator({ total, next, operation }, name);
    switch (name) {
      case '=':
        setDisplay(operation === null || next === null ? total : result.total);
        setOperation(null);
        setNext(null);
        setTotal(null);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        setTotal(display === '0' || display === 'syntax error' ? total : display);
        setOperation(display === 'syntax error' ? operation : name);
        break;
      default:
        setDisplay('0');
        setTotal(result.total);
        setNext(result.next);
        setOperation(result.operation);
        break;
    }
  };

  return (
    <>
      <Display result={next === null ? total : next} display={display} />
      <ButtonPanel clickBtn={handleClick} />
    </>
  );
}

export default App;

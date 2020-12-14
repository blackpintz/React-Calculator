import React, { Component } from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculator from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      display: '0',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = name => {
    const { total, next, operation } = this.state;
    const result = Calculator({ total, next, operation }, name);
    switch (name) {
      case '=':
        this.setState(state => ({
          display: state.operation === null || state.next === null ? state.total : result.total,
          operation: null,
          next: null,
          total: null,
        }));
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        this.setState(state => ({
          ...result, total: state.display === '0' || state.display === 'syntax error' ? total : state.display, operation: state.display === 'syntax error' ? operation : name,
        }));
        break;
      case 'AC':
        this.setState({ ...result, display: '0' });
        break;
      default:
        this.setState({ ...result, display: '0' });
        break;
    }
  };

  render() {
    const { next, total, display } = this.state;
    return (
      <div className='calc-body'>
        <Display result={next === null ? total : next} display={display} />
        <ButtonPanel clickBtn={this.handleClick} />
      </div>
    );
  }
}

export default App;

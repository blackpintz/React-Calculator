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
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = name => {
    const { total, next, operation } = this.state;
    const result = Calculator({ total, next, operation }, name);
    switch (name) {
      case '+':
      case '-':
      case '*':
      case '/':
        this.setState({ ...result });
        break;
      case 'AC':
        this.setState({ ...result });
        break;
      case '+/-':
        this.setState({ ...result });
        break;
      case '=':
        this.setState(state => ({
          total: state.operation === null || state.next === null ? state.total : result.total,
          operation: null,
          next: null,
        }));
        break;
      default:
        this.setState({ ...result });
        break;
    }
  };

  render() {
    const { next } = this.state;
    return (
      <>
        <Display result={next === null ? '0' : next.toString()} />
        <ButtonPanel clickBtn={this.handleClick} />
      </>
    );
  }
}

export default App;

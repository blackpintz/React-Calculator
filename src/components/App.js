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

  handleClick = name => { console.log(`You clicked ${name}.`); };

  render() {
    const { total, next, operation } = this.state;
    const result = Calculator({ total: 2, next: 2, operation: '*' }, '+');
    console.log(result);
    return (
      <>
        <Display result={result} />
        <ButtonPanel clickBtn={this.handleClick} />
      </>
    );
  }
}

export default App;

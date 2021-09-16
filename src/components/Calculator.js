import React from 'react';
import calculate from '../logic/calculate';
import './calculator.css';
import Key from './Key';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.buffer = '';
    this.state = { total: null, next: null };
  }

  handleKeyDown = (keyPressed) => {
    this.setState((obj) => calculate(obj, keyPressed));
  }

  returnKey = (value, index = 0, array = []) => {
    if (index === (array.length - 1)) {
      return (
        <Key key={value} value={value} orange handleKeyDown={this.handleKeyDown} />
      );
    }
    return (
      <Key key={value} value={value} handleKeyDown={this.handleKeyDown} />
    );
  }

  returnDiv = (row1, row2 = '') => (
    <div className="row">
      {row1}
      {row2}
    </div>
  );

  render() {
    const { next, total, operation } = this.state;
    const firstRowArr = ['AC', '+/-', '%', '÷'];
    const secondRowArr = ['7', '8', '9', 'x'];
    const thirdRowArr = ['4', '5', '6', '-'];
    const fourthRowArr = ['1', '2', '3', '+'];
    const dotEqualArr = ['.', '='];

    const firstRow = firstRowArr.map(
      (value, index) => (
        this.returnKey(value, index, firstRowArr)
      ),
    );

    const secondRow = secondRowArr.map(
      (value, index) => (
        this.returnKey(value, index, secondRowArr)
      ),
    );

    const thirdRow = thirdRowArr.map(
      (value, index) => (
        this.returnKey(value, index, thirdRowArr)
      ),
    );

    const fourthRow = fourthRowArr.map(
      (value, index) => (
        this.returnKey(value, index, fourthRowArr)
      ),
    );

    const dotEqual = dotEqualArr.map(
      (value, index) => (
        this.returnKey(value, index, dotEqualArr)
      ),
    );

    return (
      <div className="keypad">
        <div className="io-container">
          <output className="d-block text-right pr-1">{next || operation || total || '0'}</output>
        </div>
        {this.returnDiv(firstRow)}
        {this.returnDiv(secondRow)}
        {this.returnDiv(thirdRow)}
        {this.returnDiv(fourthRow)}
        {this.returnDiv(
          this.returnDiv(this.returnKey('0')),
          this.returnDiv(dotEqual),
        )}
      </div>
    );
  }
}

export default Calculator;

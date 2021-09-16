import React from 'react';
import calculate from '../logic/calculate';
import './calculator.css';
import Key from './Key';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = { total: null, next: null };
  }

  handleKeyDown = (keyPressed) => {
    this.setState((state) => calculate(state, keyPressed));
  }

  returnKey = (value, index = -1, array = 0) => {
    if (index === (array.length - 1)) {
      return (
        <Key value={value} orange handleKeyDown={this.handleKeyDown} />
      );
    }
    return (
      <Key value={value} handleKeyDown={this.handleKeyDown} />
    );
  }

  returnDiv = (row1, row2 = '') => (
    <div className="row">
      {row1}
      {row2}
    </div>
  );

  render() {
    const { total, next } = this.state;
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
        <div className="row" key="value">
          {this.returnKey(value, index, secondRowArr)}
        </div>
      ),
    );

    const thirdRow = thirdRowArr.map(
      (value, index) => (
        <div className="row" key="value">
          {this.returnKey(value, index, thirdRowArr)}
        </div>
      ),
    );

    const fourthRow = fourthRowArr.map(
      (value, index) => (
        <div className="row" key="value">
          {this.returnKey(value, index, fourthRowArr)}
        </div>
      ),
    );

    const dotEqual = dotEqualArr.map(
      (value, index) => (
        <div className="row" key="value">
          {this.returnKey(value, index, dotEqualArr)}
        </div>
      ),
    );

    return (
      <div className="keypad">
        <div className="io-container">
          <output className="d-block text-right pr-1">{total || next || '0'}</output>
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

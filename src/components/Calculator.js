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

  render() {
    const click = this.handleKeyDown;
    const { total, next } = this.state;

    return (
      <div className="keypad">
        <div className="io-container">
          <output className="d-block text-right pr-1">{total || next || '0'}</output>
        </div>
        <div className="row">
          <Key value="AC" handleKeyDown={click} />
          <Key value="+/-" handleKeyDown={click} />
          <Key value="%" handleKeyDown={click} />
          <Key orange value="÷" handleKeyDown={click} />
        </div>
        <div className="row">
          <Key value="7" handleKeyDown={click} />
          <Key value="8" handleKeyDown={click} />
          <Key value="9" handleKeyDown={click} />
          <Key orange value="x" handleKeyDown={click} />
        </div>
        <div className="row">
          <Key value="4" handleKeyDown={click} />
          <Key value="5" handleKeyDown={click} />
          <Key value="6" handleKeyDown={click} />
          <Key orange value="-" handleKeyDown={click} />
        </div>
        <div className="row">
          <Key value="1" handleKeyDown={click} />
          <Key value="2" handleKeyDown={click} />
          <Key value="3" handleKeyDown={click} />
          <Key orange value="+" handleKeyDown={click} />
        </div>
        <div className="row">
          <div className="row">
            <Key value="0" handleKeyDown={click} />
          </div>
          <div className="row">
            <Key value="." handleKeyDown={click} />
            <Key orange value="=" handleKeyDown={click} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

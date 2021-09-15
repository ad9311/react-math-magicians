import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.IO = '0';
  }

  render() {
    return (
      <div className="keypad">
        <div className="io-container">
          <output className="d-block text-right pr-1">{ this.IO }</output>
        </div>
        <div className="row">
          <input className="key gray-bg" type="button" value="AC" />
          <input className="key gray-bg" type="button" value="+/-" />
          <input className="key gray-bg" type="button" value="%" />
          <input className="key orange-bg" type="button" value="÷" />
        </div>
        <div className="row">
          <input className="key gray-bg" type="button" value="7" />
          <input className="key gray-bg" type="button" value="8" />
          <input className="key gray-bg" type="button" value="9" />
          <input className="key orange-bg" type="button" value="x" />
        </div>
        <div className="row">
          <input className="key gray-bg" type="button" value="4" />
          <input className="key gray-bg" type="button" value="5" />
          <input className="key gray-bg" type="button" value="6" />
          <input className="key orange-bg" type="button" value="-" />
        </div>
        <div className="row">
          <input className="key gray-bg" type="button" value="1" />
          <input className="key gray-bg" type="button" value="2" />
          <input className="key gray-bg" type="button" value="3" />
          <input className="key orange-bg" type="button" value="+" />
        </div>
        <div className="row">
          <div className="row">
            <input className="key gray-bg" type="button" value="0" />
          </div>
          <div className="row">
            <input className="key gray-bg" type="button" value="." />
            <input className="key orange-bg" type="button" value="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

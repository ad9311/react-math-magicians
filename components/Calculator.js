import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';
import Key from './Key';

const Calculator = () => {
  const [data, setData] = useState({ total: null, next: null, operation: null });

  const handleClick = (keyPressed) => {
    setData(() => calculate(data, keyPressed));
  };

  const returnKey = (value, index = 0, array = []) => {
    if (index === (array.length - 1)) {
      return (
        <Key key={value} value={value} orange event={handleClick} />
      );
    }
    return (
      <Key key={value} value={value} event={handleClick} />
    );
  };

  const returnDiv = (row1, row2 = '') => (
    <div className="row">
      {row1}
      {row2}
    </div>
  );

  const firstRowArr = ['AC', '+/-', '%', '÷'];
  const secondRowArr = ['7', '8', '9', 'x'];
  const thirdRowArr = ['4', '5', '6', '-'];
  const fourthRowArr = ['1', '2', '3', '+'];
  const dotEqualArr = ['.', '='];

  const firstRow = firstRowArr.map(
    (value, index) => (
      returnKey(value, index, firstRowArr)
    ),
  );

  const secondRow = secondRowArr.map(
    (value, index) => (
      returnKey(value, index, secondRowArr)
    ),
  );

  const thirdRow = thirdRowArr.map(
    (value, index) => (
      returnKey(value, index, thirdRowArr)
    ),
  );

  const fourthRow = fourthRowArr.map(
    (value, index) => (
      returnKey(value, index, fourthRowArr)
    ),
  );

  const dotEqual = dotEqualArr.map(
    (value, index) => (
      returnKey(value, index, dotEqualArr)
    ),
  );

  return (
    <div className="keypad align-end w-100">
      <div className="io-container">
        <output className="d-block text-right pr-1">
          { data.next || data.operation || data.total || '0'}
        </output>
      </div>
      {returnDiv(firstRow)}
      {returnDiv(secondRow)}
      {returnDiv(thirdRow)}
      {returnDiv(fourthRow)}
      {returnDiv(
        returnDiv(returnKey('0')),
        returnDiv(dotEqual),
      )}
    </div>
  );
};

export default Calculator;

import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';
import Calculator from '../components/Calculator';


describe('calculate and operate', () => {
  test('12 / 3', () => {
    let obj = { total: null };
    obj = calculate(obj, '12');
    obj = calculate(obj, '÷');
    obj = calculate(obj, '3');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('4');
  });

  test('6 - 2', () => {
    const total = operate('6', '2', '-');
    expect(total).toEqual('4');
  });
});


describe('Calculator component', () => {
  test('5 x 3', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByText('15')).toMatchSnapshot();
  });

  test('15 + 5', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByText('20')).toMatchSnapshot();
  });
});

import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import Calculator from '../components/Calculator.js';


describe('It calculates mathematical operations', () => {
  test('5 times 3', () => {
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

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';

describe('Test routes', () => {
  test('test home', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Home'));
    expect(screen.getByText('Welcome to our page!')).toMatchSnapshot();
  });

  test('test calculator', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Calculator'));
    expect(screen.getByText('Lets do some math!')).toMatchSnapshot();
  });

  test('test quotes', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Quote'));
    expect(screen.getByText('William Paul Thurston.')).toMatchSnapshot();
  });
});

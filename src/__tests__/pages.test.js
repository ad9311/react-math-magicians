import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NavBarMock from '../mocks/navbarMocks';
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

describe('test navBar', () => {
  test('nav home', () => {
    render(<NavBarMock />);
    expect(screen.getByText('Home')).toMatchSnapshot();
  });

  test('nav Calculate', () => {
    render(<NavBarMock />);
    expect(screen.getByText('Calculator')).toMatchSnapshot();
  });
  test('nav Quotes', () => {
    render(<NavBarMock />);
    expect(screen.getByText('Quotes')).toMatchSnapshot();
  });
});

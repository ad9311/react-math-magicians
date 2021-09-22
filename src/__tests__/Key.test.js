import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Key from '../components/Key';

describe('Key component', () => {
  test('return button value', () => {
    let nameTest;
    const eventTest = (e) => nameTest = e;

    render(<Key value={'1'} event={eventTest} />);

    fireEvent.click(screen.getByText('1'));

    expect(nameTest).toEqual('1');
  });

  test('is button orange?', () => {
    render(<Key value={'1'} orange />);

    const key = screen.queryAllByRole('button');

    expect(key[0].className).toEqual('key orange-bg');
  });
});

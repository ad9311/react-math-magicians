import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('calculate', () => {
  test('12 ÷ 3', () => {
    let obj = { total: null };
    obj = calculate(obj, '12');
    obj = calculate(obj, '÷');
    obj = calculate(obj, '3');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('4');
  });

  test('do not display anithing if operation is not complete', () => {
    let obj = { total: null };
    obj = calculate(obj, '8');
    obj = calculate(obj, '9');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual(undefined);
  });

  test('return null when AC pressed', () => {
    let obj = { total: null };
    obj = calculate(obj, '7');
    obj = calculate(obj, 'AC');
    expect(obj.total).toBeNull();
  });

  test('return floating number', () => {
    let obj = { next: null };
    obj = calculate(obj, '2');
    obj = calculate(obj, '.');
    obj = calculate(obj, '6');
    expect(obj.next).toEqual('2.6');
  });
});

describe('operate', () => {
  test('6 - 2', () => {
    const total = operate('6', '2', '-');
    expect(total).toEqual('4');
  });

  test('6 + 2', () => {
    const total = operate('6', '2', '+');
    expect(total).toEqual('8');
  });

  test('6 x 2', () => {
    const total = operate('6', '2', 'x');
    expect(total).toEqual('12');
  });

  test('1 ÷ 0', () => {
    const total = operate('1', '0', '÷');
    expect(total).toEqual("Can't divide by 0.");
  });

  test('2 % 8', () => {
    const total = operate('8', '2', '%');
    expect(total).toEqual('0');
  });
});

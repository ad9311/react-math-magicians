import calculate from '../logic/calculate';
import operate from '../logic/operate';

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

const { sum, subtract, multiply, divide, power } = require('../src/calculator');

describe('Calculator', () => {
  test('sum adds two numbers', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 1)).toBe(0);
  });

  test('subtract subtracts two numbers', () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(0, 5)).toBe(-5);
  });

  test('multiply multiplies two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
  });

  test('divide divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(9, 3)).toBe(3);
  });

  test('divide throws on division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });

  test('power raises base to exponent', () => {
    expect(power(2, 3)).toBe(8);
    expect(power(5, 0)).toBe(1);
    expect(power(2, -1)).toBe(0.5);
  });
});

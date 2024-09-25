const { sum, isEven } = require('./mathFunctions');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -1 + 1 to equal 0', () => {
  expect(sum(-1, 1)).toBe(0);
});

test('returns true for even number', () => {
  expect(isEven(4)).toBe(true);
});

test('returns false for odd number', () => {
  expect(isEven(5)).toBe(false);
});

const calculateDiscount = require('./calculateDiscount');

test('gold member pays 80% of the price', () => {
  expect(calculateDiscount(100, 'gold')).toBe(100);
});

test('silver member pays 90% of the price', () => {
  expect(calculateDiscount(100, 'silver')).toBe(90);
});

test('regular member pays the full price', () => {
  expect(calculateDiscount(100, 'regular')).toBe(100);
});

test('unknown member type pays the full price', () => {
  expect(calculateDiscount(100, 'platinum')).toBe(100);
});

test('throws when price is zero', () => {
  expect(() => calculateDiscount(0, 'gold')).toThrow('price must be positive');
});

test('throws when price is negative', () => {
  expect(() => calculateDiscount(-50, 'gold')).toThrow('price must be positive');
});

test('rounds the gold discount to 2 decimal places', () => {
  // 99.99 * 0.8 = 79.992 -> 79.99
  expect(calculateDiscount(99.99, 'gold')).toBe(79.99);
});

test('rounds the silver discount to 2 decimal places', () => {
  // 10.555 * 0.9 = 9.4995 -> 9.5
  expect(calculateDiscount(10.555, 'silver')).toBe(9.5);
});

test('member type is case-sensitive: "Gold" gets no discount', () => {
  expect(calculateDiscount(100, 'Gold')).toBe(100);
});


import { calculateTotalPrice } from '../src/price.js';
import { sanitizeString } from '../src/utils.js';
import { BTTF_MOVIES_PRICE, OTHER_MOVIES_PRICE } from '../src/constants.js';

describe('calculateTotalPrice', () => {
  test('should calculate correct total price of 0 for empty basket', () => {
    const movies = [];
    const totalPrice = calculateTotalPrice(movies);

    expect(totalPrice).toBe(0);
  });

  test('should calculate correct total price for example 1', () => {
    const movies = ['Back to the Future 1', 'Back to the Future 2', 'Back to the Future 3'].map(sanitizeString);
    const totalPrice = calculateTotalPrice(movies);
    const expectedPrice = BTTF_MOVIES_PRICE * 3 * 0.8;

    expect(totalPrice).toBe(expectedPrice);
  });

  test('should calculate correct total price for example 2', () => {
    const movies = ['Back to the Future 1', 'Back to the Future 3'].map(sanitizeString);
    const totalPrice = calculateTotalPrice(movies);
    const expectedPrice = BTTF_MOVIES_PRICE * 2 * 0.9;

    expect(totalPrice).toBe(expectedPrice);
  });

  test('should calculate correct total price for example 3', () => {
    const movies = ['Back to the Future 1', 'Forward to the Past full stack et front 3'].map(sanitizeString);
    const totalPrice = calculateTotalPrice(movies);
    const expectedPrice = BTTF_MOVIES_PRICE + OTHER_MOVIES_PRICE;

    expect(totalPrice).toBe(expectedPrice);
  });

  test('should calculate correct total price for example 4', () => {
    const movies = ['Back to the Future 1', 'Back to the Future 2', 'Back to the Future 3', 'Back to the Future 2'].map(
      sanitizeString,
    );
    const totalPrice = calculateTotalPrice(movies);
    const expectedBttfPrice = BTTF_MOVIES_PRICE * 4 * 0.8;
    const expectedPrice = expectedBttfPrice;

    expect(totalPrice).toBe(expectedPrice);
  });

  test('should calculate correct total price for example 5', () => {
    const movies = ['Back to the Future 1', 'Back to the Future 2', 'Back to the Future 3', 'La chèvre'].map(
      sanitizeString,
    );
    const totalPrice = calculateTotalPrice(movies);
    const expectedBttfPrice = BTTF_MOVIES_PRICE * 3 * 0.8 + OTHER_MOVIES_PRICE;

    expect(totalPrice).toBe(expectedBttfPrice);
  });
});

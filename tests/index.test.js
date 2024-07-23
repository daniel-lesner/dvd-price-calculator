import { jest } from '@jest/globals';
import { getMoviesFromFilePath } from '../src/utils.js';
import { calculateTotalPrice } from '../src/price.js';

jest.mock('../src/utils.js');
jest.mock('../src/price.js');

describe('Total Price Calculator', () => {
  const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
  const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  const processExitSpy = jest.spyOn(process, 'exit').mockImplementation();

  test('should log total price of the basket if movies are provided', async () => {
    getMoviesFromFilePath.mockReturnValue(['Back to the Future 1']);
    calculateTotalPrice.mockReturnValue('100');

    await jest.isolateModulesAsync(async () => {
      await import('../src/index.js');
    });

    expect(calculateTotalPrice).toHaveBeenCalledWith(['Back to the Future 1']);
    expect(consoleLogSpy).toHaveBeenCalledWith(`The total price of your basket is 100`);
  });

  test('should log error and exit if no movies are found', async () => {
    getMoviesFromFilePath.mockReturnValue([]);

    await jest.isolateModulesAsync(async () => {
      await import('../src/index.js');
    });

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error: No movie titles have been found in the list');
    expect(processExitSpy).toHaveBeenCalledWith(1);
  });
});

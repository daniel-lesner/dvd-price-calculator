import { jest } from '@jest/globals';
import { readFileSync } from 'fs';
import { getMoviesFromFilePath } from '../src/utils.js';

jest.mock('fs');

describe('getMoviesFromFilePath', () => {
  const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
  const processExitSpy = jest.spyOn(process, 'exit').mockImplementation();

  test('should return movie array if file path was provided', () => {
    const mockFileContent = 'Back to the Future 1\nBack to the Future 2\nBack to the Future 3';
    readFileSync.mockReturnValue(mockFileContent);
    process.argv = ['node', 'script.js', 'input.txt'];

    const movies = getMoviesFromFilePath();

    expect(movies).toEqual(['back to the future 1', 'back to the future 2', 'back to the future 3']);
  });

  test('should log error and exit if no input file path is provided', () => {
    process.argv = ['node', 'script.js'];

    getMoviesFromFilePath();

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error: No input file path was provided as argument.');
    expect(processExitSpy).toHaveBeenCalledWith(1);
  });

  test('should log error and exit if file read throws error', () => {
    readFileSync.mockImplementation(() => {
      throw new Error('Error message');
    });
    process.argv = ['node', 'script.js', 'input.txt'];

    getMoviesFromFilePath();

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error: Could not read file: input.txt');
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error message');
    expect(processExitSpy).toHaveBeenCalledWith(1);
  });
});

import { readFileSync } from 'fs';

export const getMoviesFromFilePath = () => {
  const inputFilePath = process.argv[2];

  if (!inputFilePath) {
    console.error('Error: No input file path was provided as argument.');

    process.exit(1);
  }

  try {
    const fileContent = readFileSync(inputFilePath, 'utf-8');

    return fileContent
      .split('\n')
      .filter(item => item.trim() !== '')
      .map(sanitizeString);
  } catch (error) {
    console.error(`Error: Could not read file: ${inputFilePath}`);
    console.error(error.message);

    process.exit(1);
  }
};

const sanitizeString = string => {
  return string.toLowerCase().trim().replace(/\s+/g, ' ');
};

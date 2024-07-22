import { getMoviesFromFilePath } from './utils.js';
import { calculateTotalPrice } from './price.js';

const moviesArray = getMoviesFromFilePath();

if (!moviesArray.length) {
  console.error('Error: No movie titles have been found in the list');

  process.exit(1);
}

const totalPrice = calculateTotalPrice(moviesArray);

console.log(`The total price of your basket is ${totalPrice}`);

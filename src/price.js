import { BTTF_MOVIES_PRICE, OTHER_MOVIES_PRICE, BTTF_TITLES, BTTF_TITLES_MAPPING } from './constants.js';

export const calculateTotalPrice = movies => {
  const moviesCount = {
    bttf1: 0,
    bttf2: 0,
    bttf3: 0,
    othersCount: 0,
  };

  movies.forEach(movie => {
    const key = BTTF_TITLES_MAPPING[movie] || 'othersCount';
    moviesCount[key]++;
  });

  const totalBttfMoviesCount = BTTF_TITLES.reduce((sum, key) => sum + moviesCount[key], 0);
  const uniqueBttfMovies = BTTF_TITLES.filter(key => moviesCount[key] > 0).length;
  const discountApplied = calculateDiscount(uniqueBttfMovies);

  return BTTF_MOVIES_PRICE * discountApplied * totalBttfMoviesCount + OTHER_MOVIES_PRICE * moviesCount.othersCount;
};

const calculateDiscount = bttfMovies => {
  if (bttfMovies === 3) return 0.8;
  if (bttfMovies === 2) return 0.9;
  return 1;
};

//! Do this again

function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let gamesCount = 0;
  let currentPrice = p;

  while (s >= currentPrice) {
    s -= currentPrice;
    gamesCount++;

    if (currentPrice > m) {
      currentPrice -= d;
    } else {
      currentPrice = m;
    }

    //! Below one one do the above if else work
    // currentPrice = Math.max(currentPrice - d, m);
  }

  return gamesCount;
}

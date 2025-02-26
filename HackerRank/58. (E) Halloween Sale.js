//! Do this again

function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let gamesCount = 0;
  let currentPrice = p;

  while (s >= currentPrice) {
    s -= currentPrice;
    gamesCount++;

    // for some reason below if else not working as expected in hacker rank test cases.
    // SO, Whenever you want to fix a max value while decreasing / increasing it always use Mat.max with 2 arg.
    // if (currentPrice > m) {
    //   currentPrice -= d;
    // } else {
    //   currentPrice = m;
    // }

    // Ensure price doesn't drop below m
    // when currentPrice - d reduce below m, Math.max check both  currentPrice - d and m so it will choose m.
    currentPrice = Math.max(currentPrice - d, m);
  }

  return gamesCount;
}

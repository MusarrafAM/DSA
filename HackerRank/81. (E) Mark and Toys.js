function maximumToys(prices, k) {
  // Write your code here

  prices.sort((a, b) => a - b);

  let maximumToys = 0;

  prices.forEach((p) => {
    if (k > p) {
      k -= p;
      maximumToys++;
    }
  });

  return maximumToys;
}

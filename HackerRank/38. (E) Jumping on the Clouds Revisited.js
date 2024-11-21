function jumpingOnClouds(c, k) {
  let totalEnergyHave = 100;
  let n = c.length;
  let position = 0;
  // k = jump Distance

  do {
    position = (position + k) % n;
    let value = c[position];
    if (value == 1) {
      totalEnergyHave -= 2;
    }
    totalEnergyHave--;
  } while (position != 0);

  return totalEnergyHave;
}

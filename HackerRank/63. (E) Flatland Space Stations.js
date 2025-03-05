// Good solution link = https://www.youtube.com/watch?v=zCCz59gT9Rs

function flatlandSpaceStations(n, c) {
  // c = cities with space stations is NOT ordered
  c.sort((a, b) => a - b);
  let maxDist = 0;
  let lastCity = 0;

  // consider very first city
  const firstCityDist = c[0];
  maxDist = Math.max(firstCityDist, maxDist);

  // going left to right, assume midpoint distance for max
  for (const city of c) {
    const midCityDist = Math.floor((city - lastCity) / 2);
    maxDist = Math.max(midCityDist, maxDist);
    lastCity = city;
  }

  // consider very last city
  const lastCityDist = n - lastCity - 1;
  maxDist = Math.max(lastCityDist, maxDist);
  return maxDist;
}

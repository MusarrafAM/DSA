function toys(w) {
  // Write your code here
  let minCOntainerReq = 1;

  w.sort((a, b) => a - b);

  let currentPointer = 0;

  for (let i = 1; i < w.length; i++) {
    let dif = Math.abs(w[currentPointer] - w[i]);
    if (dif > 4) {
      currentPointer = i;
      minCOntainerReq++;
    }
  }

  return minCOntainerReq;
}

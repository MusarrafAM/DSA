//! Little tricky

function jumpingOnClouds(c) {
  // Write your code here
  let minNumOfJumpsReq = 0;

  let currPosition = 0;
  while (currPosition < c.length - 1) {
    if (c[currPosition + 2] !== 1) {
      currPosition += 2;
    } else {
      currPosition++;
    }

    minNumOfJumpsReq++;
  }

  return minNumOfJumpsReq;
}

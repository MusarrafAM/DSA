function beautifulBinaryString(b) {
  // Write your code here

  let minMoveReq = 0;
  b = b.split("");

  for (let i = 0; i < b.length - 2; i++) {
    if (b[i] == 0 && b[i + 1] == 1 && b[i + 2] == 0) {
      b[i + 2] = "1";
      minMoveReq++;
    }
  }

  return minMoveReq;
}

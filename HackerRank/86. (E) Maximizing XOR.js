//! In Javascript ^ is used for th Bitwise Operator XOR.

function maximizingXor(l, r) {
  // Write your code here
  let maxValue = 0;

  for (let i = l; i <= r; i++) {
    for (let j = i + 1; j <= r; j++) {
      let value = i ^ j;
      if (value > maxValue) {
        maxValue = value;
      }
    }
  }

  return maxValue;
}

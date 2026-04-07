//! One of the confusing problems — focus on understanding the logic

// Best approach is using LCM and GCD,
// but here we use brute force for simplicity.

// Set A: values that must divide X
// Set B: values that must be divisible by X

// Every number in Set A divides X
// X divides every number in Set B

function getTotalX(a, b) {
  // Find the maximum value in Set A and the minimum value in Set B
  const maxA = Math.max(...a);
  const minB = Math.min(...b);

  let count = 0;

  // Iterate over all numbers X from maxA to minB
  for (let x = maxA; x <= minB; x++) {
    // Check if X is divisible by all elements in Set A
    if (a.every((a_i) => x % a_i === 0)) {
      // Check if X divides all elements in Set B
      if (b.every((b_i) => b_i % x === 0)) {
        count++;
      }
    }
  }

  return count;
}

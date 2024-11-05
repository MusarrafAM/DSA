//! One of the confusing problems ever faced
// try to remember solution for this problem only.

// Best effective way is using LCM and GCD , thats kinda confusing so, i am using bruteforce approach.

// Set A: Contains integers that must be divisors of certain numbers.
// Set B: Contains integers that must be divisible by certain numbers.

// Every number in Set A divides each candidate number.
// Every candidate number is divisible by all numbers in Set B.

// X is divisible by every number in Set B (i.e., X % b == 0 for all b in Set B).
// X divides every number in Set A (i.e., a % X == 0 for all a in Set A).

function getTotalX(a, b) {
  // Find the maximum value in Set A and the minimum value in Set B
  const maxA = Math.max(...a);
  const minB = Math.min(...b);

  let count = 0;

  // Iterate over all numbers X from maxA to minB
  for (let x = maxA; x <= minB; x++) {
    // Check if X divides all elements in Set A (i.e., a % X == 0 for all a in Set A)
    if (a.every((a_i) => x % a_i === 0)) {
      // Check if X is divisible by all elements in Set B (i.e., X % b == 0 for all b in Set B)
      if (b.every((b_i) => b_i % x === 0)) {
        count++;
      }
    }
  }

  return count;
}

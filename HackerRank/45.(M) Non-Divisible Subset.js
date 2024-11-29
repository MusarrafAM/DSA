function nonDivisibleSubset(k, s) {
  // Step 1: Create a frequency array to count remainders
  const remainderCounts = Array(k).fill(0);

  // Step 2: Count the frequency of each remainder
  for (let num of s) {
    remainderCounts[num % k]++;
  }

  // Step 3: Include at most one number with a remainder of 0
  let result = Math.min(remainderCounts[0], 1);

  // Step 4: Iterate over the range [1, k/2] and choose the larger count for pairs
  for (let i = 1; i <= Math.floor(k / 2); i++) {
    if (i !== k - i) {
      // Pair remainders like i and k-i
      result += Math.max(remainderCounts[i], remainderCounts[k - i]);
    } else {
      // If remainder is exactly half of k, include only one element
      result += Math.min(remainderCounts[i], 1);
    }
  }

  return result;
}

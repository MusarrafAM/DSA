function equalizeArray(arr) {
  // Step 1: Create a frequency map to count occurrences of each element
  let freqMap = {};

  arr.forEach((num) => {
    if (freqMap[num]) {
      freqMap[num] += 1; // Increment count if the number already exists in freqMap
    } else {
      freqMap[num] = 1; // Initialize count to 1 if the number is not in freqMap
    }
  });

  // Step 2: Find the maximum frequency
  let maxFreq = Math.max(...Object.values(freqMap));

  // Step 3: Calculate the minimum deletions required
  return arr.length - maxFreq;
}

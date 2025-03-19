//! Bitwise AND

// function countPairs(arr) {
//   // Helper function to check if a number is a power of 2
//   const isPowerOf2 = (x) => x > 0 && (x & (x - 1)) === 0;

//   // Frequency map to store count of each number in the array
//   const freqMap = {};

//   // Populate the frequency map
//   for (let num of arr) {
//     freqMap[num] = (freqMap[num] || 0) + 1;
//   }

//   let count = 0;
//   const uniqueNumbers = Object.keys(freqMap).map(Number);

//   // Check each unique pair (a, b)
//   for (let i = 0; i < uniqueNumbers.length; i++) {
//     for (let j = i; j < uniqueNumbers.length; j++) {
//       const a = uniqueNumbers[i];
//       const b = uniqueNumbers[j];

//       // If the bitwise AND of a and b is a power of 2
//       if (isPowerOf2(a & b)) {
//         if (a === b) {
//           // For identical numbers, count pairs within the same group
//           count += (freqMap[a] * (freqMap[a] - 1)) / 2;
//         } else {
//           // For different numbers, count pairs across groups
//           count += freqMap[a] * freqMap[b];
//         }
//       }
//     }
//   }

//   return count;
// }

//! Task of Pairing
function maxPairs(freq) {
    let totalPairs = 0;

    // Iterate through the frequency array
    for (let i = 0; i < freq.length; i++) {
        // Pair dumbbells of the same weight
        totalPairs += Math.floor(freq[i] / 2);
        
        // Try to pair the leftover dumbbells of weight i with weight i+1
        if (i < freq.length - 1) {
            const canPair = Math.min(freq[i] % 2, freq[i + 1]);
            totalPairs += canPair;
            freq[i + 1] -= canPair;  // Update the frequency of weight i+1
        }
    }

    return totalPairs;
}


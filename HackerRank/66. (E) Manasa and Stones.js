// Kind of hard try to do it again, did not completed it.

function stones(n, a, b) {
  // Write your code here
  let possibleValues = new Set([0]);
  let i = 0;

  while (i < n - 1) {
    let nextValues = new Set();
    for (const val of possibleValues) {
      const aVal = val + a;
      nextValues.add(aVal);

      const bVal = val + b;
      nextValues.add(bVal);
    }
    possibleValues = nextValues;
    i++;
  }

  const output = Array.from(possibleValues);
  output.sort((a, b) => a - b);

  return output;
}

// //! Big O(n)  = best solution
// function stones(n, a, b) {
//   let results = [];

//   // Loop through all possible values of x from 0 to n-1
//   for (let x = 0; x < n; x++) {
//     let totalStones = x * a + (n - 1 - x) * b;
//     results.push(totalStones);
//   }

//   // Remove duplicates and sort the results in ascending order
//   return [...new Set(results)].sort((x, y) => x - y);
// }

//! Recently completed it using 2 pointers sliding window (Did it on the first run - felt awesome)
function birthday(s, d, m) {
  // Write your code here
  // length = m
  // sum Integers = d

  let numOfWays = 0;

  let leftPointer = 0;
  let rightPointer = m - 1;

  while (rightPointer <= s.length) {
    let sum = 0;
    for (let i = leftPointer; i <= rightPointer; i++) {
      sum += s[i];
    }
    if (sum === d) {
      numOfWays++;
    }

    leftPointer++;
    rightPointer++;
  }

  return numOfWays;
}

//! Simple way = creating sub array in each iteration.

// function birthday(s, d, m) {
//   // Write your code here

//   // d = toatl value
//   // m = consecutive bar

//   let count = 0;

//   for (let i = 0; i <= s.length - m; i++) {
//     let sum = 0;
//     let subarr = s.slice(i, i + m);

//     subarr.forEach((num) => {
//       sum += num;
//     });

//     if (sum === d) {
//       count++;
//     }
//   }

//   return count;
// }

//! Sliding window Technique (This is not exacly a sliding window, but kind of..)
// function birthday(s, d, m) {
//   // Write your code here
//   // d = toatl value
//   // m = consecutive bar

//   let count = 0;

// }

// console.log(birthday((s = [1, 2, 1, 3, 2]), (d = 3), (m = 2)));

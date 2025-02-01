//! Method - 01 Very easy way with using unshift and pop
// shift = remove from first index
// unshift = add to first index
// pop = remove from last index
// push = add to last index

function circularArrayRotation(a, k, queries) {
  // Write your code here

  for (let i = 0; i < k; i++) {
    a.unshift(a.pop()); // All this do is remove the last element and add it to start index.
  }

  //Whenever we see a list need to be returned think of map method
  return queries.map((queryIndex) => a[queryIndex]);
}

//! Method - 01 Simplified
// function circularArrayRotation(a, k, queries) {
//   // Write your code here

//   for(let i=0; i<k; i++){
//       let lastValue = a.pop()
//       a.unshift(lastValue)
//   }

//   let answer = []
//   queries.forEach((q)=>{
//       answer.push(a[q])
//   })

//   return answer

// }

//! Method - 02 Hard way Regular method using modular
// function circularArrayRotation(a, k, queries) {
//   // Write your code here
//   const arrayLength = a.length;
//   const newList = [];
//   const answer = [];

//   // Normalize k to avoid redundant rotations
//   //  This is Extra optimization without this also code Work
//   k = k % arrayLength;

//   for (let i = 0; i < arrayLength; i++) {
//     let afterRotationIndex = (i + k) % arrayLength;
//     newList[afterRotationIndex] = a[i];
//   }

//   queries.forEach((i) => {
//     answer.push(newList[i]);
//   });

//   return answer;
// }

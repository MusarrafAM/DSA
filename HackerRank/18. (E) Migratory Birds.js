//! Very Very Important Do this frequently.

//! My initial Solution took so much time cause had to learn object iteration.
// function migratoryBirds(arr) {
//   // Write your code here
//   let typeAndCOunt = {};
//   let mostfreqeuntBirds = [];

//   arr.forEach((item) => {
//     if (typeAndCOunt[item]) {
//       typeAndCOunt[item]++;
//     } else {
//       typeAndCOunt[item] = 1;
//     }
//   });

//   let typeAndCOuntkeys = Object.keys(typeAndCOunt);
//   let typeAndCOuntValues = Object.values(typeAndCOunt);

//   let highFreqeuntValues = Math.max(...typeAndCOuntValues);

//   typeAndCOuntkeys.forEach((key) => {
//     if (typeAndCOunt[key] == highFreqeuntValues) {
//       mostfreqeuntBirds.push(parseInt(key));
//     }
//   });

//   return Math.min(...mostfreqeuntBirds);
// }

//! Solution 2 with new Array()  with a way of finding

// function migratoryBirds(arr) {
//   // Create a frequency array where the index corresponds to bird type
//   let frequency = new Array(6).fill(0); // Assuming bird types are between 1 and 5 (inclusive)
//   //   since array index starting from 0, we cant create 5, if create 5 we will ony det index upto 4 not the 5th,
//   //   thats why we create 6 element in the array so we can get the 1st and 5th element
//   //   we wont use 0th index element,it will we 0 forever.

//   // Count the occurrences of each bird type
//   arr.forEach((bird) => {
//     frequency[bird]++; // Increment the count for the bird type
//   });

//   // Find the bird type with the maximum frequency
//   let maxFrequency = 0;
//   let birdTypeWithMaxFrequency = -1;

//   for (let i = 1; i < frequency.length; i++) {
//     if (frequency[i] > maxFrequency) {
//       maxFrequency = frequency[i];
//       birdTypeWithMaxFrequency = i; // Found a new bird with higher frequency
//     } else if (frequency[i] === maxFrequency) {
//       // If frequencies are the same, take the smaller bird ID = birdTypeWithMaxFrequency, i = comparing 2 num.
//       birdTypeWithMaxFrequency = Math.min(birdTypeWithMaxFrequency, i);
//     }
//   }

//   return birdTypeWithMaxFrequency;
// }

//! Solution 3 with just list
function migratoryBirds(arr) {
  // Write your code here

  const birds = [0, 0, 0, 0, 0];

  arr.forEach((id) => {
    birds[id - 1]++;
  });

  return birds.indexOf(Math.max(...birds)) + 1;
}

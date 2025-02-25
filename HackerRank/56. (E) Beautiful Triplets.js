//! Good question to understand multiple nested loops to check all the combinations.
// This is a brute force method with a time complexity of O(nlogn +  n3)
// ignore nlogn so the time complexity is n3

function beautifulTriplets(d, arr) {
  // Write your code here
  let sortedArr = arr.sort((a, b) => a - b);

  let beautifulTripletCount = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      if (sortedArr[j] - sortedArr[i] === d) {
        for (let k = 2; k < arr.length; k++) {
          if (sortedArr[k] - sortedArr[j] === d) {
            beautifulTripletCount++;
          }
        }
      }
    }
  }

  return beautifulTripletCount;
}

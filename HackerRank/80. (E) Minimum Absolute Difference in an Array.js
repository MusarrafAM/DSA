//! Completed on Final min wth a fluke, even though this is the perfect answer. Do again.

//! using single loop
function minimumAbsoluteDifference(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);

  let minDiff = Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    let diff = Math.abs(arr[i] - arr[i + 1]);
    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
}

// Below is inefficient always go with the first try. if didn't work give this nested loop a try.
//! using double for loop
// function minimumAbsoluteDifference(arr) {
//   // Write your code here

//   let minDif = Infinity

//   for(let i=0; i<arr.length; i++){
//       for(let j=i+1; j<arr.length; j++){
//           let dif = Math.abs(arr[i] - arr[j])
//           if(dif < minDif){
//               minDif = dif
//           }
//       }
//   }

//   return minDif

// }

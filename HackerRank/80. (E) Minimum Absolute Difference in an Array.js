//! Completed on Final min wth a fluke, even though this is the perfect answer. Do again.

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

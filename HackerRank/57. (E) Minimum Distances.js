// My solution Completed on first try
// There is a better solution using set next time learn it.

function minimumDistances(a) {
  // Write your code here

  let distances = [];
  let sample = [];

  for (let i = 0; i < a.length; i++) {
    if (sample.includes(a[i])) {
      let firstValue = a.indexOf(a[i]);

      distances.push(Math.abs(firstValue - i));
    } else {
      sample.push(a[i]);
    }
  }

  if (distances.length === 0) {
    return -1;
  }

  let minDistance = Math.min(...distances);

  return minDistance;
}

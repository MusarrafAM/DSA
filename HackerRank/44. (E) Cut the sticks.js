//! Did not complete on first try
// Do this again and again

function cutTheSticks(arr) {
  // Write your code here

  let numOfStickInEachIteration = [];

  while (arr.length > 0) {
    numOfStickInEachIteration.push(arr.length);
    let shortestStick = Math.min(...arr);
    arr = arr.map((stick) => stick - shortestStick).filter((stick) => stick > 0);
  }

  return numOfStickInEachIteration;
}

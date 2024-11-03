function diagonalDifference(arr) {
  // Write your code here
  let leftD = 0;
  let rightD = 0;
  let pointer = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    leftD += arr[i][i];
    rightD += arr[i][pointer];
    pointer--;
  }

  return Math.abs(leftD - rightD);
}

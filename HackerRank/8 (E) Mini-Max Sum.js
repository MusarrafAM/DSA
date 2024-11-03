function miniMaxSum(arr) {
  // Write your code here
  let sum = 0;
  let min = arr[0];
  let max = arr[0];

  arr.forEach((e) => {
    if (e < min) {
      min = e;
    } else if (e > max) {
      max = e;
    }
    sum += e;
  });

  console.log(sum - max, sum - min);
}

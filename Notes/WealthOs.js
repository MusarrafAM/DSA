// WealthOS final Algorithm Question
// from 1 to 4 it will print the same, after 4 the previous addition and the currecnt number addion will have to print.

function nextSum(num) {
  let sum = 0;
  if (num <= 4) {
    return num;
  } else {
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
  }
  return sum;
}

console.log(nextSum(5));

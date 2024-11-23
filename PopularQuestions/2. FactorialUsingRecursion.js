// factorial of 5 => 5 * 4 * 3 * 2 * 1

//! with using a recursive function. (Mostly asked on interviews)

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));

//! without using a recursive function.
// let factorial = 5;

// let value = 1;

// for (let i = factorial; i > 0; i--) {
//   value *= i;
// }

// console.log(value);

//! reverse a Number without using any methods, just by using pure programming.
// Very Important Interview question (Asked by calcey)
// let number = 123456789;

// // Initializing the result variable
// let result = 0;

// while (number > 0) {
//   // Getting the rightmost digit
//   rightmost = number % 10;

//   result = result * 10 + rightmost;

//   // Removing the rightmost digit from the number
//   number = Math.floor(number / 10);
// }
// console.log("Reversed number is : " + result);

//! Below is the easy way using combination methods()
// let result = 0;
// let number = 123456789;

// result  = parseInt(number.toString().split("").reverse().join(""))

// console.log("Reversed number is : "+result);

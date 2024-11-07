//! The every() method checks if all array values pass a test.
// it returns a boolean

// const a = [2, 4, 6, 8, 10];
// const b = [2, 5, 6, 8, 10]; // Contains an odd number

// let isAllEven = a.every((num) => num % 2 == 0);     // true
// let isAllEven = b.every((num) => num % 2 == 0);     // false

// console.log(isAllEven);

//! The some() method checks if some array values pass a test.
// it returns a boolean

// const a = [2, 4, 6, 8, 10];
// const b = [2, 5, 6, 8, 10]; // Contains an odd number

// let isAnyOdd = a.some((num) => num % 2 == 1);     // false
// let isAnyOdd = b.some((num) => num % 2 == 1);     // true

// console.log(isAnyOdd);

// Eg to understand every and some
// const numbers = [45, 4, 9, 16, 25];

// let isSomeOver18 = numbers.some((num) => num > 18);        // true
// let isAllOver18 = numbers.every((num) => num > 18);      // false

// console.log(isSomeOver18);
// console.log(isAllOver18);

//! Array.push() and Array.unshift()
// These are methods to add elements to an array.

// push() adds one or more elements to the end of an array.
// unshift() adds one or more elements to the beginning of an array.
// Syntax:
// javascript
// Copy code
// let arr = [1, 2, 3];
// arr.push(4);  // Adds 4 to the end
// console.log(arr);  // Output: [1, 2, 3, 4]

// arr.unshift(0);  // Adds 0 to the beginning
// console.log(arr);  // Output: [0, 1, 2, 3, 4]

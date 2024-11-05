// ### 1. **`toFixed()`**
// Formats a number using fixed-point notation.

// let num = 123.456;
// console.log(num.toFixed(2)); // "123.46"

// ### 2. **`toPrecision()`**
// Formats a number to a specified length (total number of significant digits).

// let num = 123.456;
// console.log(num.toPrecision(4)); // "123.5"

// ### 3. **`toString()`**
// Converts a number to a string.

// let num = 123;
// console.log(num.toString()); // "123"

// ### 4. **`valueOf()`**
// Returns the primitive value of a number object.

// let num = new Number(123);
// console.log(num.valueOf()); // 123

// ### 5. **`Number.isInteger()`**
// Determines whether the passed value is an integer.

// console.log(Number.isInteger(123)); // true
// console.log(Number.isInteger(123.45)); // false

// ### 6. **`Number.isNaN()`**
// Determines whether the value is NaN (Not-a-Number).

// console.log(Number.isNaN(NaN)); // true
// console.log(Number.isNaN(123)); // false

// ### 7. **`Number.isFinite()`**
// Determines whether the value is a finite number.

// console.log(Number.isFinite(123)); // true
// console.log(Number.isFinite(Infinity)); // false

// ### 8. **`Number.parseInt()`**
// Parses a string argument and returns an integer of the specified radix.

// console.log(Number.parseInt("123px")); // 123

// ### 9. **`Number.parseFloat()`**
// Parses a string argument and returns a floating point number.

// console.log(Number.parseFloat("123.45px")); // 123.45

// ### 10. **`Math` Methods**
// While not part of the `Number` object, the `Math` object includes many useful methods for numerical calculations, such as:
// - `Math.round()`
// - `Math.floor()`
// - `Math.ceil()`
// - `Math.random()`
// - `Math.max()`
// - `Math.min()`

// ### Example of Using `Math` Methods:

// console.log(Math.round(4.7)); // 5
// console.log(Math.floor(4.7)); // 4
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.random()); // Random number between 0 and 1

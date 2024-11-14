// In JavaScript, functions and methods related to handling alphabets often involve converting characters
// to their ASCII codes, manipulating them, or converting codes back to characters. Here’s an overview of useful
//  methods for working with alphabets:

// ### 1. `charCodeAt()`
// The `charCodeAt()` method returns the ASCII (or Unicode) code of a character at a specified index within a string.

// let letter = 'A';
// console.log(letter.charCodeAt(0)); // Output: 65

// ### 2. `String.fromCharCode()`
// The `String.fromCharCode()` method does the opposite of `charCodeAt()`: it takes one or more Unicode values and returns a string with the corresponding characters.

// let code = 65;
// console.log(String.fromCharCode(code)); // Output: 'A'

// ### 3. Shifting Letters
// To work with alphabets in a way similar to shifting characters (such as for Caesar ciphers), you can manipulate the Unicode value and wrap it around if necessary.

// For example, shifting a character by `n` positions in the alphabet:

// function shiftLetter(letter, shift) {
//     let code = letter.charCodeAt(0);
//     // Shift within uppercase A-Z
//     if (code >= 65 && code <= 90) {
//         return String.fromCharCode(((code - 65 + shift) % 26) + 65);
//     }
//     // Shift within lowercase a-z
//     else if (code >= 97 && code <= 122) {
//         return String.fromCharCode(((code - 97 + shift) % 26) + 97);
//     }
//     // Non-alphabet characters are returned as is
//     return letter;
// }

// console.log(shiftLetter('A', 3)); // Output: 'D'

// ### 4. Checking if a Character is a Letter
// To check if a character is a letter, verify if it falls within the uppercase (A-Z) or lowercase (a-z) ASCII ranges.

// function isLetter(char) {
//     let code = char.charCodeAt(0);
//     return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
// }

// console.log(isLetter('A')); // Output: true
// console.log(isLetter('1')); // Output: false

// ### 5. Converting Between Cases
// Using ASCII codes, you can switch between uppercase and lowercase letters by adding or subtracting 32.

// function toggleCase(char) {
//     let code = char.charCodeAt(0);
//     if (code >= 65 && code <= 90) {
//         // Convert uppercase to lowercase
//         return String.fromCharCode(code + 32);
//     } else if (code >= 97 && code <= 122) {
//         // Convert lowercase to uppercase
//         return String.fromCharCode(code - 32);
//     }
//     return char;
// }

// console.log(toggleCase('a')); // Output: 'A'
// console.log(toggleCase('B')); // Output: 'b'

// ### Summary of Key Methods

// - `charCodeAt(index)`: Gets the ASCII/Unicode code of the character at `index`.
// - `String.fromCharCode(code)`: Converts a code back to its character.
// - `isLetter(char)`: Checks if a character is a letter.
// - `toggleCase(char)`: Converts uppercase to lowercase and vice versa.

// These functions and methods give you flexibility for a wide range of alphabet-related operations in JavaScript.

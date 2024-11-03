//* ### Basic String Methods
// 1. **`length`**: Returns the length of a string.

//    let str = "Hello World";
//    console.log(str.length); // 11

// 2. **`charAt(index)`**: Returns the character at the specified index.

//    let str = "Hello";
//    console.log(str.charAt(1)); // "e"

// 3. **`charCodeAt(index)`**: Returns the Unicode value of the character at the specified index.

//    let str = "A";
//    console.log(str.charCodeAt(0)); // 65

//* ### Case Conversion Methods
// 4. **`toUpperCase()`**: Converts the string to uppercase.

//    let str = "hello";
//    console.log(str.toUpperCase()); // "HELLO"

// 5. **`toLowerCase()`**: Converts the string to lowercase.

//    let str = "HELLO";
//    console.log(str.toLowerCase()); // "hello"

//* ### Substring Methods
// 6. **`slice(start, end)`**: Extracts a part of the string and returns it as a new string.

//    let str = "Hello World";
//    console.log(str.slice(0, 5)); // "Hello"

// 7. **`substring(start, end)`**: Similar to `slice()` but does not accept negative indices.

//    let str = "Hello World";
//    console.log(str.substring(0, 5)); // "Hello"

// 8. **`substr(start, length)`**: Extracts a substring starting from a specified index for a given number of characters.

//    let str = "Hello World";
//    console.log(str.substr(0, 5)); // "Hello"

//* ### Search Methods
// 9. **`indexOf(substring)`**: Returns the index of the first occurrence of a substring, or `-1` if not found.

//    let str = "Hello World";
//    console.log(str.indexOf("World")); // 6

// 10. **`lastIndexOf(substring)`**: Returns the index of the last occurrence of a substring, or `-1` if not found.

//     let str = "Hello World World";
//     console.log(str.lastIndexOf("World")); // 12

// 11. **`includes(substring)`**: Checks if a string contains a specified substring.

//     let str = "Hello World";
//     console.log(str.includes("World")); // true

// 12. **`startsWith(substring)`**: Checks if a string starts with a specified substring.

//     let str = "Hello World";
//     console.log(str.startsWith("Hello")); // true

// 13. **`endsWith(substring)`**: Checks if a string ends with a specified substring.

//     let str = "Hello World";
//     console.log(str.endsWith("World")); // true

//* ### String Modification Methods
// 14. **`replace(searchValue, newValue)`**: Replaces the first occurrence of `searchValue` with `newValue`.

//     let str = "Hello World";
//     console.log(str.replace("World", "JavaScript")); // "Hello JavaScript"

// 15. **`replaceAll(searchValue, newValue)`**: Replaces all occurrences of `searchValue` with `newValue`.

//     let str = "Hello World World";
//     console.log(str.replaceAll("World", "JavaScript")); // "Hello JavaScript JavaScript"

// 16. **`trim()`**: Removes whitespace from both ends of the string.

//     let str = "   Hello World   ";
//     console.log(str.trim()); // "Hello World"

// 17. **`trimStart()` / `trimEnd()`**: Removes whitespace from the start or end of the string.

//     let str = "   Hello World   ";
//     console.log(str.trimStart()); // "Hello World   "
//     console.log(str.trimEnd());   // "   Hello World"

//* ### String Split and Concatenation Methods
// 18. **`concat(string)`**: Concatenates two or more strings.

//     let str1 = "Hello";
//     let str2 = "World";
//     console.log(str1.concat(" ", str2)); // "Hello World"

// 19. **`split(separator)`**: Splits a string into an array of substrings.

//     let str = "Hello World";
//     console.log(str.split(" ")); // ["Hello", "World"]

//* ### String Padding Methods
// 20. **`padStart(targetLength, padString)`**: Pads the string at the start with a specified character until it reaches the target length.
//     let str = "5";

// 21. **`padEnd(targetLength, padString)`**: Pads the string at the end with a specified character until it reaches the target length.

//     let str = "5";
//     console.log(str.padEnd(3, "0")); // "500"

//! Imporant
// this string concatenation make any number a string before concatenation.

// let str = "Hello";
// let num = 123;

// let result = str + num; // "Hello123"
// let result2 = num + str; // "123Hello"

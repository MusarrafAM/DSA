// `Array.from` is a JavaScript method that creates a new array from an array-like or iterable object. This method is useful when you want to convert objects like NodeLists, Sets, Maps, or strings into arrays, which then allows you to use array-specific methods like `.map`, `.filter`, and `.reduce`.

// Here’s a breakdown of how it works:

// ### Syntax
// ```javascript
// Array.from(arrayLike, mapFunction, thisArg)
// ```

// - **arrayLike**: The object you want to convert into an array.
// - **mapFunction** *(optional)*: A function to apply to each element of the new array, similar to `Array.prototype.map`.
// - **thisArg** *(optional)*: A value to use as `this` when executing the `mapFunction`.

// ### Examples

// 1. **Converting a String to an Array:**
//    ```javascript
//    const str = 'hello';
//    const strArray = Array.from(str);
//    console.log(strArray); // Output: ['h', 'e', 'l', 'l', 'o']
//    ```

// 2. **Converting a Set to an Array:**
//    ```javascript
//    const mySet = new Set([1, 2, 3]);
//    const myArray = Array.from(mySet);
//    console.log(myArray); // Output: [1, 2, 3]
//    ```

// 3. **Using `mapFunction` with Array.from:**
//    ```javascript
//    const nums = Array.from([1, 2, 3], x => x * 2);
//    console.log(nums); // Output: [2, 4, 6]
//    ```

// 4. **Converting NodeList to Array:**
//    ```javascript
//    const nodeList = document.querySelectorAll('div');
//    const nodeArray = Array.from(nodeList);
//    ```

// ### Why Use `Array.from`?
// - **To make array-like objects** (e.g., `arguments`, `NodeList`) **easier to work with**.
// - **For easier conversions of iterable objects** to arrays.
// - **To apply transformations during conversion**

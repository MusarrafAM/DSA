//! ==============================
//! JavaScript Array Methods Notes
//! ==============================

//! every()
// Checks if ALL elements pass a condition
// Returns: boolean

const a = [2, 4, 6, 8, 10];
const b = [2, 5, 6, 8, 10];

const isAllEvenA = a.every((num) => num % 2 === 0); // true
const isAllEvenB = b.every((num) => num % 2 === 0); // false

console.log(isAllEvenA);
console.log(isAllEvenB);

//! some()
// Checks if AT LEAST ONE element passes a condition
// Returns: boolean

const isAnyOddA = a.some((num) => num % 2 === 1); // false
const isAnyOddB = b.some((num) => num % 2 === 1); // true

console.log(isAnyOddA);
console.log(isAnyOddB);

//! Example: every() vs some()

const numbers1 = [45, 4, 9, 16, 25];

const isSomeOver18 = numbers1.some((num) => num > 18); // true
const isAllOver18 = numbers1.every((num) => num > 18); // false

console.log(isSomeOver18);
console.log(isAllOver18);

//! push() and unshift()
// Add elements to array (MUTATE original array)

let arr1 = [1, 2, 3];

arr1.push(4); // add to END
console.log(arr1); // [1, 2, 3, 4]

arr1.unshift(0); // add to START
console.log(arr1); // [0, 1, 2, 3, 4]

//! map()
// Transforms each element → returns NEW array

const nums = [1, 2, 3, 4];

const doubled = nums.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8]
console.log(nums); // original unchanged

//! forEach()
// Loops through array and performs an action
// Returns: undefined (NO return value)
// Does NOT create a new array

const nums4 = [1, 2, 3];

nums4.forEach((num) => {
  console.log(num * 2);
});

// NOTE:
// - Used only for iteration (side effects)
// - Cannot break or return values

//! map() vs forEach() ⭐

// map → returns NEW array (used for transformation)
const mapped = nums4.map((num) => num * 2);
console.log(mapped); // [2, 4, 6]

// forEach → just loops (no return)
const result = nums4.forEach((num) => num * 2);
console.log(result); // undefined

//! Example: Bad vs Good

// ❌ Bad (using forEach to transform)
let temp = [];
nums4.forEach((num) => temp.push(num * 2));

// ✅ Good (use map)
const better = nums4.map((num) => num * 2);

//! filter()
// Returns NEW array with elements that match condition

const evens = nums.filter((num) => num % 2 === 0);

console.log(evens); // [2, 4]

//! reduce() ⭐
// Reduces array to a SINGLE value

const sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10

// acc = accumulator
// curr = current value

//! find()
// Returns FIRST element that matches condition
// If none → undefined

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const user = users.find((u) => u.id === 2);

console.log(user); // { id: 2, name: "Bob" }

//! Another find() example

const numbers2 = [3, 7, 8, 10, 15];

const firstEven = numbers2.find((num) => num % 2 === 0);

console.log(firstEven); // 8

//! find() vs filter()

const numbers3 = [1, 3, 5, 8, 10];

// find → FIRST match
const firstEvenNum = numbers3.find((num) => num % 2 === 0);
console.log(firstEvenNum); // 8

// filter → ALL matches
const allEvenNums = numbers3.filter((num) => num % 2 === 0);
console.log(allEvenNums); // [8, 10]

//! splice() ⭐ == splice(start, count) == count-based (how many to remove)
// Add/remove elements (MUTATES original array)

let arr2 = [1, 2, 3, 4, 5];

arr2.splice(1, 2); // remove 2 elements from index 1

console.log(arr2); // [1, 4, 5]

//! slice() == slice(start, end) = range-based (end is excluded)
// Returns part of array (DOES NOT mutate)

const arr3 = [1, 2, 3, 4, 5];

const subArray = arr3.slice(1, 4);

console.log(subArray); // [2, 3, 4]
console.log(arr3); // original unchanged

//! ==============================
//! 💡 Interview Pro Tips
//! ==============================

// ⭐ map, filter, reduce → MOST IMPORTANT

// ⭐ splice vs slice
// splice → MUTATES original array
// slice  → DOES NOT mutate (returns new array)

// ⭐ find vs filter
// find   → first match
// filter → all matches

// ⭐ Mutating methods:
// push, pop, shift, unshift, splice, sort, reverse

// ⭐ Non-mutating methods:
// map, filter, reduce, slice, find, some, every

//! ==============================
//! 🧠 Quick Memory Tricks
//! ==============================

// map    → transform
// filter → select
// reduce → combine
// find   → first match
// splice → change original
// slice  → copy part

// every → ALL must pass
// some  → AT LEAST ONE must pass

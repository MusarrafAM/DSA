//! Optimized Solution using the Set - O(n)
// function sockMerchant(n, ar) {
//   // Write your code here
//   let parisCount = 0;
//   let search = new Set();

//   ar.forEach((item) => {
//     if (search.has(item)) {
//       parisCount++;
//       search.delete(item);
//     } else {
//       search.add(item);
//     }
//   });

//   return parisCount;
// }

//! why set instead of Array/list   (Very Important Read it.)

// Great question! The reason for using a Set in this case, rather than an array (or list),
// is primarily for its fast lookup and removal operations, which can make the algorithm more efficient.

// Here's a breakdown of why a Set is used:
// 1. Constant Time Lookups (has):
// The Set has a built-in method has() which checks whether an item exists in the set. This operation is O(1) (constant time) on average.
// In contrast, using an array (or list) would require searching through the array to see if the item exists. This search would typically take O(n) time, where n is the size of the array. So checking if an element exists in an array would be slower for larger lists.
// 2. Efficient Removal (delete):
// Similarly, Set has the delete() method, which removes an element in O(1) time.
// If you were using an array, to remove an element, you would typically need to find the element first (which is O(n)), and then shift the rest of the array to close the gap (which can be O(n) again), leading to an overall O(n) complexity.
// 3. No Duplicates in Set:
// A Set automatically ensures that only unique elements are stored. If you attempt to add a duplicate element to a set, it will simply not add it. This helps you avoid manually checking for duplicates, which is something you'd need to do if you used an array (i.e., checking if an item exists before adding it).
// In your specific example, you want to track pairs of items that match. If an item is already in the Set, you know you've seen it before, so you can increment the parisCount and remove the item, ensuring that each pair is only counted once.
// Example Walkthrough:
// Let's take an example to explain the logic behind the code.

// Suppose the array ar is:

// let ar = [1, 2, 3, 2, 1, 4];
// Now let's break down the code execution:

// search is a Set that starts empty.
// Iterating through the array:
// First item (1): The Set doesn't contain 1, so it's added to the Set.
// Second item (2): The Set doesn't contain 2, so it's added to the Set.
// Third item (3): The Set doesn't contain 3, so it's added to the Set.
// Fourth item (2): The Set does contain 2, so you increase parisCount and delete 2 from the Set (since you’ve counted this pair).
// Fifth item (1): The Set does contain 1, so you increase parisCount and delete 1 from the Set.
// Sixth item (4): The Set doesn't contain 4, so it's added to the Set.
// At the end of this iteration, parisCount would be 2, because you've found two pairs: (1,1) and (2,2).

// Summary:
// The reason for using a Set is efficiency. Operations like checking for existence (has) and
// removing an element (delete) are faster (O(1) on average) in a Set than in an
// array (where they would typically be O(n)). Using a Set also handles uniqueness for you,
// which simplifies the logic when you’re looking for matching pairs.

//! Noraml Solution using a dictionary O(2n)
// function sockMerchant(n, ar) {
// Write your code here

//   let numOfPairs = 0;
//   let dictOfsocks = {};

//   ar.forEach((item) => {
//     if (dictOfsocks[item]) {
//       dictOfsocks[item]++;
//     } else {
//       dictOfsocks[item] = 1;
//     }
//   });

//   let objectValues = Object.values(dictOfsocks);

//   objectValues.forEach((val) => {
//     numOfPairs += Math.floor(val / 2);
//   });

//   return numOfPairs;
// }

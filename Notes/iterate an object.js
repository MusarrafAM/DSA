//! We cant iterate object like we do in the arrays in jS.

// In JavaScript, when you hear the term "loop", you probably think of using the various loop methods
// like for loops, forEach(), map() and others.

// But in the case of objects, unfortunately, these methods don't work because objects are not iterable.

// This doesn't mean we can't loop through an object – but this means that we can't loop through
// an object directly the same way we do for an array:

//! old method

// const population = {
//     male: 4,
//     female: 93,
//     others: 10
//   };

//   // Iterate through the object
//   for (const key in population) {
//     if (population.hasOwnProperty(key)) {
//       console.log(`${key}: ${population[key]}`);
//     }
//   }

//* To avoid the stress and difficulty of looping and to use the hasOwnProperty method, ES6 and ES8 introduced
//! object static methods. These convert object properties to arrays, allowing us to use array methods directly.

// Object static methods let us extract either keys(), values(), or both keys and values as entries() in an array,
// allowing us to have as much flexibility over them as we do with actual arrays.

// !We have three object static methods (We can any one of these three), which are:

// Object.keys() = takes the object as an argument and returns an array containing all property names (also known as keys).
// Object.values() = takes the Object as an argument and returns an array containing all key values.
// Object.entries() =  it outputs an array of arrays, whereby each inner array has two elements which are the property and the value.

//! 1. Object.keys()  == use this i am preferring this.
// const population = {
//   male: 4,
//   female: 93,
//   others: 10,
// };

// let genders = Object.keys(population);

// console.log(genders); // ["male","female","others"]

// ----------------- practical usage ---------------------------------------

// const population = {
//   male: 4,
//   female: 93,
//   others: 10,
// };

// let totalPopulation = 0;
// let genders = Object.keys(population);

// genders.forEach((gender) => {
//   totalPopulation += population[gender];
// });

// console.log(totalPopulation); // 107

//! 2.Object.values()
// const population = {
//     male: 4,
//     female: 93,
//     others: 10
//   };

//   let numbers = Object.values(population);

//   console.log(numbers); // [4,93,10]

// ----------------- practical usage ---------------------------------------
// const population = {
//   male: 4,
//   female: 93,
//   others: 10,
// };

// let totalPopulation = 0;
// let numbers = Object.values(population);

// numbers.forEach((number) => {
//   totalPopulation += number;
// });

// console.log(totalPopulation); // 107

//! 3.Object.entries()
const population = {
  male: 4,
  female: 93,
  others: 10,
};

let populationArr = Object.entries(population);

// console.log(populationArr);

// *   this is the output of populationArr 2D array
//   [
//     ['male', 4]
//     ['female', 93]
//     ['others', 10]
//   ]

// Then We could decide to destructure the array, so we get the key and value:

for ([key, value] of populationArr) {
  console.log(key);
}

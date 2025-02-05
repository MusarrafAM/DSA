// if we try using for loop it will exceed the time limit
//! Do this again

function squares(a, b) {
  // Write your code here 

  let startingSquareNumber = Math.ceil(Math.sqrt(a));
  let endSquareNumber = Math.floor(Math.sqrt(b));

  return endSquareNumber - startingSquareNumber + 1;
}

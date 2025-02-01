//! Do this again simple concept of BonInt and factorial
// factorial of 5! => 5 * 4 * 3 * 2 * 1
// size of each data type for numbers
// byte = -128 -> 127
// short = -32768 -> 32767

//! byte < shot < int < long < BigInt

function extraLongFactorials(n) {
  // Write your code here
  let bigNumber = BigInt(1);

  for (let i = n; i > 0; i--) {
    //since BigInt type can only be multiple by another BigInt we need to convert.
    let currentNumber = BigInt(i);

    bigNumber *= currentNumber;
  }

  //In BigInt at the end there is a n = 15511210043330985984000000n to remove that we need to make it as a string.
  console.log(bigNumber.toString());
}

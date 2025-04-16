//! Big Lesson learned, No matter how easy the question you feel, Read the question fully.

//! Very simple way
function funnyString(s) {
  // Write your code here

  let normalString = s;
  let reverseString = s.split("").reverse().join("");

  for (let i = 0; i < s.length - 1; i++) {
    let normalAskiValue = normalString[i].charCodeAt();
    let normalNextAskiValue = normalString[i + 1].charCodeAt();

    let reverseAskiValue = reverseString[i].charCodeAt();
    let reverseNextAskiValue = reverseString[i + 1].charCodeAt();

    let normalDif = Math.abs(normalAskiValue - normalNextAskiValue);
    let referselDif = Math.abs(reverseAskiValue - reverseNextAskiValue);

    if (normalDif != referselDif) {
      return "Not Funny";
    }
  }

  return "Funny";
}

//! hard way
// function funnyString(s) {
//   // Write your code here

//   let normalCharValues;
//   let reversedCharValuse = [];

//   normalCharValues = s.split("").map((letter) => letter.charCodeAt(0));

//   for (let i = normalCharValues.length - 1; i >= 0; i--) {
//     reversedCharValuse.push(normalCharValues[i]);
//   }

//   let normal = [];

//   for (let i = 0; i < normalCharValues.length - 1; i++) {
//     let dif = Math.abs(normalCharValues[i] - normalCharValues[i + 1]);

//     normal.push(dif);
//   }

//   let reversed = [];

//   for (let i = 0; i < reversedCharValuse.length - 1; i++) {
//     let dif = Math.abs(reversedCharValuse[i] - reversedCharValuse[i + 1]);
//     reversed.push(dif);
//   }

//   for (let i = 0; i < normal.length; i++) {
//     if (normal[i] != reversed[i]) {
//       return "Not Funny";
//     }
//   }

//   return "Funny";
// }

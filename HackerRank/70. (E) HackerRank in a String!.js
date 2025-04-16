//! Very Good question

// Pointer method
function hackerrankInString(s) {
  // Write your code here

  let hacekrrank = "hackerrank";
  let letterspace = 0;
  let pointer = 0;

  while (pointer < s.length) {
    if (s[pointer] === hacekrrank[letterspace]) {
      letterspace++;
    }

    pointer++;
  }

  if (letterspace === 10) {
    return "YES";
  } else {
    return "NO";
  }
}

// normal way
// function hackerrankInString(s) {
//   // Write your code here
//   const target = "hackerrank".split("");
//   let indexx = 0;

//   s.split("").forEach((letter) => {
//     if (letter === target[indexx]) {
//       indexx++;
//     }
//   });

//   if (indexx < target.length) {
//     return "NO";
//   } else {
//     return "YES";
//   }
// }

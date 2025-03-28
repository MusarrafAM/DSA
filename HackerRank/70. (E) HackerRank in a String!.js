//! Very Good question

function hackerrankInString(s) {
  // Write your code here
  const target = "hackerrank".split("");
  let indexx = 0;

  s.split("").forEach((letter) => {
    if (letter === target[indexx]) {
      indexx++;
    }
  });

  if (indexx < target.length) {
    return "NO";
  } else {
    return "YES";
  }
}

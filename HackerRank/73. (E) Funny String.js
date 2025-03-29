//! Big Lesson learned, No matter how easy the question you feel, Read the question fully.

function funnyString(s) {
  // Write your code here

  let normalCharValues;
  let reversedCharValuse = [];

  normalCharValues = s.split("").map((letter) => letter.charCodeAt(0));

  for (let i = normalCharValues.length - 1; i >= 0; i--) {
    reversedCharValuse.push(normalCharValues[i]);
  }

  let normal = [];

  for (let i = 0; i < normalCharValues.length - 1; i++) {
    let dif = Math.abs(normalCharValues[i] - normalCharValues[i + 1]);

    normal.push(dif);
  }

  let reversed = [];

  for (let i = 0; i < reversedCharValuse.length - 1; i++) {
    let dif = Math.abs(reversedCharValuse[i] - reversedCharValuse[i + 1]);
    reversed.push(dif);
  }

  for (let i = 0; i < normal.length; i++) {
    if (normal[i] != reversed[i]) {
      return "Not Funny";
    }
  }

  return "Funny";
}

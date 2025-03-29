//! Couldnt complet on first 15 mins
// Completed in next 5 mins
// Don't think Fancy just go with the usual confutable method.

function pangrams(s) {
  // Write your code here

  let allLetters = [];
  s.split(" ").forEach((word) => {
    word.split("").forEach((letter) => {
      allLetters.push(letter.toUpperCase());
    });
  });

  let uniqeLetters = [...new Set(allLetters)].length;

  if (uniqeLetters === 26) {
    return "pangram";
  } else {
    return "not pangram";
  }
}

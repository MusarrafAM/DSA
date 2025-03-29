// Given the following arrays and code, how many words from the allWords array contain at least one vowel (a, e, i, o, u)?

// Give it a try before see the answer

// const wordsWithVowels = ["apple", "ocean", "plane", "music", "grape"];
// const wordsWithoutVowels = ["crypt", "rhythm", "myths", "gym", "brrr"];

// const allWords = [...wordsWithVowels, ...wordsWithoutVowels];

// const vowelLetters = ["a", "e", "i", "o", "u"];

// let superLetters = 0;
















const wordsWithVowels = ["apple", "ocean", "plane", "music", "grape"];
const wordsWithoutVowels = ["crypt", "rhythm", "myths", "gym", "brrr"];

const allWords = [...wordsWithVowels, ...wordsWithoutVowels];

const vowelLetters = ["a", "e", "i", "o", "u"];

let superLetters = 0;

for (let i = 0; i < allWords.length; i++) {
  //! Below Line is important
  let isTrue = vowelLetters.some((letter) => allWords[i].includes(letter));
  if (isTrue) {
    superLetters++;
  }
}

console.log(superLetters);

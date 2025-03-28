function camelcase(s) {
  // Write your code here
  let words = 1;
  let stringArray = s.split("");

  stringArray.forEach((letter) => {
    let letterCode = letter.charCodeAt(0);
    console.log(letterCode);
    if (letterCode >= 65 && letterCode < 97) {
      words++;
    }
  });

  return words;
}

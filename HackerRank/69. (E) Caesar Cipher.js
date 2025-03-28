//! Very Very Important

function caesarCipher(s, k) {
  // Write your code here
  // "a" = 97
  // "z" = 122
  // "A" = 65
  // "Z" = 90

  // if k is more than 26
  k = k % 26;
  let encryptedString = "";

  s.split("").forEach((letter) => {
    let askiCode = letter.charCodeAt(0);
    if (askiCode >= 65 && askiCode <= 90) {
      // Capital Letter
      askiCode += k;
      if (askiCode > 90) {
        let extra = askiCode - 90;
        askiCode = 64 + extra;
      }
      let newString = String.fromCharCode(askiCode);
      encryptedString += newString;
    } else if (askiCode >= 97 && askiCode <= 122) {
      // small letter
      askiCode += k;
      if (askiCode > 122) {
        let extra = askiCode - 122;
        askiCode = 96 + extra;
      }
      let newString = String.fromCharCode(askiCode);
      encryptedString += newString;
    } else {
      encryptedString += letter;
    }
  });

  return encryptedString;
}

//! Very Very Important DO this again and again.

function caesarCipher(s, k) {
  // Write your code here
  // "a" = 97
  // "z" = 122
  // "A" = 65
  // "Z" = 90

  // if k is more than 26
  k = k % 26;
  let cipherText = "";

  for (let i = 0; i < s.length; i++) {
    let charCode = s[i].charCodeAt();

    // small
    if (charCode >= 97 && charCode <= 122) {
      let cipherCode = charCode + k;
      if (cipherCode > 122) {
        cipherCode = cipherCode - 26;
      }
      cipherText += String.fromCharCode(cipherCode);
    }

    // Capital
    else if (charCode >= 65 && charCode <= 90) {
      let cipherCode = charCode + k;
      if (cipherCode > 90) {
        cipherCode = cipherCode - 26;
      }
      cipherText += String.fromCharCode(cipherCode);
    } else {
      cipherText += s[i];
    }
  }

  return cipherText;
}

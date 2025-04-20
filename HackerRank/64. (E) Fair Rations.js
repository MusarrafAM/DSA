// Try this again mostly competed but could not figure out when its not possible to distribute even loafs.
// after google search only figured, that  If the number of odd elements is odd, it's impossible to balance

function fairRations(B) {
  // Write your code here
  let minNumLoafs = 0;

  let oddNumbersCount = B.filter((item) => item % 2 !== 0).length;

  //! If the number of odd elements is odd, it's impossible to balance
  if (oddNumbersCount % 2 !== 0) {
    return "NO";
  }

  if (B.length <= 2) {
    return "NO";
  }

  for (let i = 0; i < B.length-1; i++) {
    // isOdd
    if (B[i] % 2 !== 0) {
      B[i] += 1;
      B[i + 1] += 1;
      minNumLoafs += 2;
    }
  }

  return minNumLoafs;
}

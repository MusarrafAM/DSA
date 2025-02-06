// Good one, Completed one first try.

function repeatedString(s, n) {
  // Write your code here
  let totalCountOfA = 0;
  let lengthOfS = s.length;
  let numberOfAInSArray = s.split("").filter((letter) => letter === "a").length;

  let totalCircleTime = Math.floor(n / lengthOfS);
  let remainder = n % lengthOfS;

  totalCountOfA = totalCircleTime * numberOfAInSArray;

  for (let i = 0; i < remainder; i++) {
    if (s[i] === "a") {
      totalCountOfA++;
    }
  }

  return totalCountOfA;
}

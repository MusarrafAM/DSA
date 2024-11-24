function appendAndDelete(s, t, k) {
  let sSize = s.length;
  let tSize = t.length;
  let totalTry = k;
  let initialLetterMatchCount = 0;

  // Find the common prefix length
  let n = 0;
  while (n < sSize && n < tSize && s[n] === t[n]) {
    initialLetterMatchCount++;
    n++;
  }

  // Calculate the remaining characters to delete or append
  let sRemaining = sSize - initialLetterMatchCount;
  let tRemaining = tSize - initialLetterMatchCount;
  let requiredChanges = sRemaining + tRemaining;

  // Check if it's possible to transform within k operations
  if (totalTry >= requiredChanges && (totalTry - requiredChanges) % 2 === 0) {
    return "Yes";
  }

  // Check if we can delete and recreate strings with excessive k
  if (totalTry >= sSize + tSize) {
    return "Yes";
  }

  return "No";
}

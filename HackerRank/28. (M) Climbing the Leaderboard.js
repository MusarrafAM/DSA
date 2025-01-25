// Try this again and again good for better algo understating.
// Array.from is a JavaScript method that creates a new array from an array-like or iterable object.
//! This method is useful when you want to convert objects like NodeLists, Sets, Maps, or strings into arrays,
// which then allows you to use array-specific methods like .map, .filter, and .reduce

function climbingLeaderboard(scores, alice) {
  // Remove duplicates and keep only unique scores in descending order
  let uniqueScores = Array.from(new Set(scores));
  let result = [];

  // Start from the last (lowest) score in uniqueScores for efficiency
  let index = uniqueScores.length - 1;

  // For each score Alice has, determine her rank
  for (let i = 0; i < alice.length; i++) {
    while (index >= 0 && alice[i] >= uniqueScores[index]) {
      index--; // Move to the next rank in uniqueScores
    }
    // Since index points to the rank below Alice's score, add 2 for correct rank
    result.push(index + 2);
  }

  return result;
}

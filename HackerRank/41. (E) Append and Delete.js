//! Did not complete this question kind of hard for me. I think its more like a medium question.
//! Try this again

function appendAndDelete(s, t, k) {
  let commonLength = 0;

  // Find the longest common prefix
  for (let i = 0; i < Math.min(s.length, t.length); i++) {
    if (s[i] === t[i]) {
      commonLength++;
    } else {
      break;
    }
  }

  // Calculate the minimum operations needed
  let minOperations = s.length - commonLength + (t.length - commonLength);

  // Check if the operation is possible
  if (minOperations > k) {
    return "No";
  } else if ((k - minOperations) % 2 === 0 || k >= s.length + t.length) {
    return "Yes";
  } else {
    return "No";
  }
}

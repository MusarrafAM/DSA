function circularArrayRotation(a, k, queries) {
  // Write your code here
  const arrayLength = a.length;
  const newList = [];
  const answer = [];

  // Normalize k to avoid redundant rotations
  //  This is Extra optimization without this also code Work
  k = k % arrayLength;

  for (let i = 0; i < arrayLength; i++) {
    let afterRotationIndex = (i + k) % arrayLength;
    newList[afterRotationIndex] = a[i];
  }

  queries.forEach((i) => {
    answer.push(newList[i]);
  });

  return answer;
}

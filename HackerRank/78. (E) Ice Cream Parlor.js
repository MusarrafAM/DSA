function icecreamParlor(m, arr) {
  // Write your code here

  let cost = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === m) {
        cost.push(i + 1, j + 1);
      }
    }
  }

  return cost;
}

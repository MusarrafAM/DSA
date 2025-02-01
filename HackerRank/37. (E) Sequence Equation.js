// Question not clear but able to find the answer every time.

function permutationEquation(p) {
  // Write your code here
  let yArray = [];

  const size = p.length;

  for (let i = 1; i <= size; i++) {
    let x = p.indexOf(i) + 1;
    let y = p.indexOf(x) + 1;
    yArray.push(y);
  }

  return yArray;
}

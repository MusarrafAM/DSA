function findDigits(n) {
  // Write your code here
  let numberArray = n.toString().split("");
  let count = 0;

  numberArray.forEach((eachNum) => {
    let eachNumInt = parseInt(eachNum);

    if (n % eachNumInt == 0 && eachNumInt != 0) {
      count++;
    }
  });

  return count;
}

function marcsCakewalk(calorie) {
  // Write your code here
  // 2 pow(i cupcakc) * calories == miles

  calorie.sort((a, b) => b - a);

  let minMiles = 0;

  calorie.forEach((cal, index) => {
    let value = Math.pow(2, index) * cal;
    minMiles += value;
  });

  return minMiles;
}

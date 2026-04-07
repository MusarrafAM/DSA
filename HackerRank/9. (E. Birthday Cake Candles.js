function birthdayCakeCandles(candles) {
  // Write your code here

  //! Easy way with 2 loops (not optimized) with O(2n) time complexity
  // let tallest = Math.max(...candles)
  // let count = 0

  // candles.forEach((item)=>{
  //     if(item === tallest){
  //         count++
  //     }
  // })

  // return count

  //! Optimized Solution with single loop with O(n) time complexity
  let tallest = candles[0];
  let count = 0;

  candles.forEach((item) => {
    if (item === tallest) {
      count++;
    } else if (item > tallest) {
      tallest = item;
      count = 1;
    }
  });
  return count;
}

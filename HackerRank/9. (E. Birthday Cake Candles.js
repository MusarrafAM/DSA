function birthdayCakeCandles(candles) {
  // Write your code here

  //!   Easy way with 2 loops (not optimized) wtih O(2n) time coplexity
  // let tallest = Math.max(...candles)
  // let count = 0

  // candles.forEach((item)=>{
  //     if(item === tallest){
  //         count++
  //     }
  // })

  // return count

  //! Optimized Solution with single loop wtih O(n) time coplexity
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

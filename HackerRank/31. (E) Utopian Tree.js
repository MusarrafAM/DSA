// sometimes when logging the input don't make sense in that situation just do the question as you understand what the input is and run, it will work correct.
// very small tricky question.

//! Method 1
function utopianTree(n) {
  // Write your code here
  let height = 1;

  for (let i = 1; i <= n; i++) {
    // i is the cycle.
    if (i % 2 == 0) {
      height += 1;
    } else {
      height = height * 2;
    }
  }

  return height;
}

//! Method 2
// function utopianTree(n) {
//   // Write your code here

//   let height = 1
//   let isSpring = true

//   for(let i=1; i<=n; i++){
//       if(isSpring){   // doubles
//           height *= 2
//       } else{    // +1
//           height += 1
//       }

//       if(isSpring){
//           isSpring = false
//       }else{
//           isSpring = true
//       }
//   }

//   return height

// }

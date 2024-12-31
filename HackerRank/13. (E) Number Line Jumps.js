//! One of the best problem many time failed t do this. so do this with again
//! Normal way

function kangaroo(x1, v1, x2, v2) {
  // Write your code here

  if (v1 > v2) {
    while (x1 < x2) {
      x1 += v1;
      x2 += v2;
      if (x1 === x2) {
        return "YES";
      }
    }
  }
  return "NO";
}

//! Equation way
// v1 distance covered in each jump by kangaroo 1
// v2 distance covered in each jump by kangaroo 2

// after n jumps
// kangaroo 1 will at a position, x1 + (n * v1)
// kangaroo 2 will at a position, x2 + (n * v2)

// if both are at the same PointerEvent,
//     x1 + (n * v1) =  x2 + (n * v2)
//     x1 - x2 = (n * v2) - (n * v1)
//     x1 - x2 = n (v2 - v1)
//     n = (x1 - x2) / (v2 - v1)

// n should be a whole number if both kangaroos meet, and in that case,

// (x1 - x2) % (v2 - v1) = 0

// And,
// v1 > v2 since x2 is strickly greater than x1

// (v1 > v2) and ((x1 - x2) % (v2 - v1) = 0 )

// The final code is below
function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  return v1 > v2 && (x1 - x2) % (v2 - v1) == 0 ? "YES" : "NO";
}

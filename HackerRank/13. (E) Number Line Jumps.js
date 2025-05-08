//! This time complete it on my first try.
//! One of the best problem many time failed t do this. so do this with again
//! Normal way

function kangaroo(x1, v1, x2, v2) {
  // Write your code here

  if (v1 <= v2) {
    return "NO";
  }

  while (x1 < x2) {
    x1 += v1;
    x2 += v2;

    if (x1 === x2) {
      return "YES";
    }
  }

  return "NO";
}

//! Closures
function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  return inner;
}

let a = outer();
a();

// outer()()   // Easy way to call a function of function.

// firsts parenthesis ti call the outer function second is to call the inner function.

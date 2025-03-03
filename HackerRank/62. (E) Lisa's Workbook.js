//! Didn't complete on first try
//! Do this again This is a prime example for don't just dive into code, just think how we can solve this then code.

function workbook(n, k, arr) {
  let specialProblems = 0; // To count the number of special problems
  let currentPage = 1; // Pages start from 1

  // Loop over each chapter
  for (let i = 0; i < n; i++) {
    let problemsInChapter = arr[i];

    // Loop over the problems in the current chapter
    for (let j = 1; j <= problemsInChapter; j++) {
      // Check if the current problem number is equal to the current page number
      if (j === currentPage) {
        specialProblems++;
      }

      // If we've filled the current page with problems, increment the page number
      if (j % k === 0 || j === problemsInChapter) {
        currentPage++;
      }
    }
  }

  return specialProblems;
}

//! Do this again
// Could not get it correct on initial try

//Kind of hard to understand initially.

//! Solution - 1
function saveThePrisoner(n, m, s) {
  // Write your code here
  let remainder = m % n;
  let lastPrisoner = (remainder + s - 1) % n;

  return lastPrisoner == 0 ? n : lastPrisoner;
}

//Cant use with while method it will throw exceeded timeout error

// ! solution 2
function saveThePrisoner(n, m, s) {
  // Write your code here
  let prisonerNeedsToBeSaved = (s + m - 1) % n;

  return prisonerNeedsToBeSaved === 0 ? n : prisonerNeedsToBeSaved;
}

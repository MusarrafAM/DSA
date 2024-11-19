//Kind of hard to understand initially.

function saveThePrisoner(n, m, s) {
  // Write your code here
  let remainder = m % n;
  let lastPrisoner = (remainder + s - 1) % n;

  return lastPrisoner == 0 ? n : lastPrisoner;
}

//Cant use with while method it will throw exceeded timeout error

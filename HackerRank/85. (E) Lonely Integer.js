function lonelyinteger(a) {
  // Write your code here

  let freq = {};

  for (let i = 0; i < a.length; i++) {
    if (freq[a[i]]) {
      freq[a[i]]++;
    } else {
      freq[a[i]] = 1;
    }
  }

  let entries = Object.entries(freq);

  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1] == 1) {
      return entries[i][0];
    }
  }
}

function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    // same year moth but late date = 15 * days delayed
    // same year but late month = 500 * months delayed
    // late by years = 10000
  
    if (y1 > y2) {
      return 10000;
    } else if (m1 > m2 && y1 === y2) {
      return 500 * (m1 - m2);
    } else if (d1 > d2 && m1 === m2 && y1 === y2) {
      return 15 * (d1 - d2);
    } else {
      return 0;
    }
  }
  
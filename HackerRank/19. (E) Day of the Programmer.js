function dayOfProgrammer(year) {
  // Write your code here
  const first8MonthInNormalYear = 243;
  const first8MonthInDaysLeapYear = 244;
  const first8MonthInDays1918 = 230; // In 1918, due to the calendar transition, the first 8 months had 230 days   (Need to reduce 14 days = since after jan 31  is feb 14)

  let date = 0;
  let isLeapYear = false;
  //find teh day of programmer 256. ====  256 - first 8 months (243) can get the september date.

  function findLeapInGregorian(year) {
    if (year % 400 == 0) {
      return true;
    } else if (year % 4 == 0 && year % 100 != 0) {
      return true;
    } else {
      return false;
    }
  }

  // Leap year calculation
  if (year >= 1700 && year <= 1917) {
    // Julian calendar
    if (year % 4 === 0) {
      isLeapYear = true;
    }
  } else if (year >= 1919) {
    // Gregorian calendar
    isLeapYear = findLeapInGregorian(year);
  } else if (year === 1918) {
    // Special case for 1918 (transition year)
    // The 256th day in 1918 is different due to the shift in dates (256 - 230)
    return `26.09.${year}`;
  }

  if (isLeapYear) {
    date = 256 - first8MonthInDaysLeapYear;
  } else {
    date = 256 - first8MonthInNormalYear;
  }

  return `${date}.09.${year}`;
}

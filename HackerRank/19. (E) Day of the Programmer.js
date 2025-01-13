//! new method easy to understand method
function dayOfProgrammer(year) {
  // Write your code here

  // 1700 to 1917 = rusia Julian  calander
  // from 1917 rusia used gregorian calander
  // 1918 trasisin calander from julian to gregorian
  // 1918  next day after January 31st was February 14th
  // in 1918, February 14th was the 32nd day of the year in Russia.

  // both calander 29 days in feb during leap year. 28 in norma year

  // leapyear 256 = September 12
  // not leap year = September 13

  const isJulieanLeap = (year) => {
    return year % 4 === 0;
  };

  const isGregorianLeap = (year) => {
    if (year % 400 === 0) {
      return true;
    }

    if (year % 4 === 0) {
      if (year % 100 !== 0) {
        return true;
      }
    }

    return false;
  };

  let day = "";

  if (year <= 1917) {
    //jiliean
    const isLeap = isJulieanLeap(year);
    if (isLeap) {
      day = "12";
    } else {
      day = "13";
    }
  } else if (year >= 1919) {
    //gregorian
    const isLeap = isGregorianLeap(year);
    if (isLeap) {
      day = "12";
    } else {
      day = "13";
    }
  } else {
    // 1918
    day = "26";
  }

  return `${day}.09.${year}`;
}

//! My prev Method, lots of calculations
// function dayOfProgrammer(year) {
//   // Write your code here
//   const first8MonthInNormalYear = 243;
//   const first8MonthInDaysLeapYear = 244;
//   const first8MonthInDays1918 = 230; // In 1918, due to the calendar transition, the first 8 months had 230 days   (Need to reduce 14 days = since after jan 31  is feb 14)

//   let date = 0;
//   let isLeapYear = false;
//   //find teh day of programmer 256. ====  256 - first 8 months (243) can get the september date.

//   function findLeapInGregorian(year) {
//     if (year % 400 == 0) {
//       return true;
//     } else if (year % 4 == 0 && year % 100 != 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   // Leap year calculation
//   if (year >= 1700 && year <= 1917) {
//     // Julian calendar
//     if (year % 4 === 0) {
//       isLeapYear = true;
//     }
//   } else if (year >= 1919) {
//     // Gregorian calendar
//     isLeapYear = findLeapInGregorian(year);
//   } else if (year === 1918) {
//     // Special case for 1918 (transition year)
//     // The 256th day in 1918 is different due to the shift in dates (256 - 230)
//     return `26.09.${year}`;
//   }

//   if (isLeapYear) {
//     date = 256 - first8MonthInDaysLeapYear;
//   } else {
//     date = 256 - first8MonthInNormalYear;
//   }

//   return `${date}.09.${year}`;
// }

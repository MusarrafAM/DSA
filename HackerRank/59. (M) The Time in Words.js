function timeInWords(h, m) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
  ];

  if (m === 0) {
    return `${words[h]} o' clock`;
  }

  if (m === 15) {
    return `quarter past ${words[h]}`;
  }

  if (m === 30) {
    return `half past ${words[h]}`;
  }

  if (m === 45) {
    return `quarter to ${words[(h % 12) + 1]}`;
  }

  if (m <= 30) {
    if (m === 1) {
      return `one minute past ${words[h]}`;
    }
    return `${words[m]} minutes past ${words[h]}`;
  } else {
    const nextHour = (h % 12) + 1;
    const remainingMinutes = 60 - m;
    if (remainingMinutes === 1) {
      return `one minute to ${words[nextHour]}`;
    }
    return `${words[remainingMinutes]} minutes to ${words[nextHour]}`;
  }
}

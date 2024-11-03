function timeConversion(s) {
  // Write your code here
  let hour = s.slice(0, 2);

  if (s.includes("AM")) {
    if (hour == "12") {
      hour = "00";
    }
  } else {
    // if PM
    if (hour != "12") {
      hour = parseInt(hour) + 12;
    }
  }

  //1 = 12 am = 00
  //2 = 1am - 11 am = do nothing
  //3 = 12 pm = do nothing
  //4 = 1pm - 11pm = add 12

  return hour + s.slice(2, 8);
}

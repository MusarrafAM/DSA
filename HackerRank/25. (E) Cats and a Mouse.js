function catAndMouse(x, y, z) {
  let catADifference = Math.abs(z - x);
  let catBDifference = Math.abs(z - y);

  if (catADifference === catBDifference) {
    return "Mouse C";
  } else if (catADifference < catBDifference) {
    return "Cat A";
  } else {
    return "Cat B";
  }
}

//in This question the console.log() ,the input might confuse you, but just return then everything works fine.

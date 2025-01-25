// I could not complete it in first try so do again.
//If have time Try to solve using 2 pointers after sorting the array.

function pickingNumbers(a) {
  // Write your code here

  let PickedNumbersListOfList = [];
  let MaxSizedListLength = 0;

  a.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    let newList = [];
    newList.push(a[i]);
    for (let j = i + 1; j < a.length; j++) {
      let difference = Math.abs(a[i] - a[j]);
      if (difference <= 1) {
        newList.push(a[j]);
      }
    }
    PickedNumbersListOfList.push(newList);
  }

  PickedNumbersListOfList.forEach((arr) => {
    if (arr.length > MaxSizedListLength) {
      MaxSizedListLength = arr.length;
    }
  });

  return MaxSizedListLength;
}

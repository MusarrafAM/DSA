function bonAppetit(bill, k, b) {
  // Write your code here
  let annaBill = 0;
  let totalBill = 0;

  for (let i = 0; i < bill.length; i++) {
    totalBill += bill[i];
  }

  annaBill = (totalBill - bill[k]) / 2;

  if (annaBill == b) {
    console.log("Bon Appetit"); // if fail division
  } else {
    console.log(b - annaBill); // if fail division
  }
}

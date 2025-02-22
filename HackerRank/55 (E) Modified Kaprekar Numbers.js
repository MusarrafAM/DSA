function kaprekarNumbers(p, q) {
  let kaprekarNumbers = [];

  for (let i = p; i <= q; i++) {
    let squared = i * i;
    let strSquared = squared.toString();
    let len = strSquared.length;
    let numLength = i.toString().length;

    // Right part has as many digits as the number `i`
    let right = parseInt(strSquared.slice(len - numLength) || "0", 10); // put 10 to parse integer into decimal(Optional)
    // Left part is the remaining digits
    let left = parseInt(strSquared.slice(0, len - numLength) || "0", 10); // put 10 to parse integer into decimal(Optional)

    if (left + right === i) {
      kaprekarNumbers.push(i);
    }
  }

  if (kaprekarNumbers.length > 0) {
    console.log(kaprekarNumbers.join(" "));
  } else {
    console.log("No Kaprekar numbers");
  }
}

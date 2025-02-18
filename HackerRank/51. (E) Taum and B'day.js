//! This won't pass hacker rank's 2 test case bcs of large input, so we have done the working solution in method 2
// function taumBday(b, w, bc, wc, z) {
//   // Determine the effective costs
//   let effectiveBlackCost = Math.min(bc, wc + z);
//   let effectiveWhiteCost = Math.min(wc, bc + z);

//   // Calculate the minimum total cost
//   return (b * effectiveBlackCost) + (w * effectiveWhiteCost);
// }

//! Method 2  to handle large numbers
function taumBday(b, w, bc, wc, z) {
  // Convert all inputs to BigInt to handle very large numbers
  b = BigInt(b);
  w = BigInt(w);
  bc = BigInt(bc);
  wc = BigInt(wc);
  z = BigInt(z);

  // Find the minimum cost for black and white gifts
  const blackCost = bc < wc + z ? bc : wc + z; // Cheaper of direct black or converted
  const whiteCost = wc < bc + z ? wc : bc + z; // Cheaper of direct white or converted

  // Total cost is the sum of costs for black and white gifts
  const totalCost = b * blackCost + w * whiteCost;

  // Convert BigInt back to a regular number for output
  return totalCost.toString(); // Convert to string because BigInt cannot be output as a regular number
}

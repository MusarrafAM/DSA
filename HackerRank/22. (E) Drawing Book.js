//! Important Have not complete it yet without looking the answer

function pageCount(n, p) {
  // Write your code here
  let totalTurn = Math.floor(n / 2);
  let frontTurn = Math.floor(p / 2);
  let backTurn = totalTurn - frontTurn;

  return Math.min(frontTurn, backTurn);
}

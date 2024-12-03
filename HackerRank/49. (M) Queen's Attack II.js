function queensAttack(n, k, r_q, c_q, obstacles) {
  // Directions the queen can move: Up, Down, Left, Right, 4 Diagonals
  const directions = [
    [1, 0], // Up
    [-1, 0], // Down
    [0, 1], // Right
    [0, -1], // Left
    [1, 1], // Top-right diagonal
    [1, -1], // Top-left diagonal
    [-1, 1], // Bottom-right diagonal
    [-1, -1], // Bottom-left diagonal
  ];

  // Set of obstacles to quickly check if a square is blocked
  const obstacleSet = new Set();
  for (let i = 0; i < k; i++) {
    const [r, c] = obstacles[i];
    obstacleSet.add(`${r},${c}`);
  }

  let count = 0;

  // Function to count attacks in a given direction
  function countAttacks(direction) {
    let [dr, dc] = direction;
    let r = r_q;
    let c = c_q;
    let steps = 0;

    // Move in the given direction until we hit the board edge or an obstacle
    while (true) {
      r += dr;
      c += dc;
      if (r < 1 || r > n || c < 1 || c > n || obstacleSet.has(`${r},${c}`)) {
        break;
      }
      steps++;
    }
    return steps;
  }

  // Count attacks in all 8 directions
  for (let direction of directions) {
    count += countAttacks(direction);
  }

  return count;
}

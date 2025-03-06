// One of my Favorite problem
// Do this again, Did not complete on first try

function cavityMap(grid) {
  // Write your code here
  let gridArray = grid.map((row) => row.split(""));

  for (let i = 1; i < gridArray.length - 1; i++) {
    for (let j = 1; j < gridArray[i].length - 1; j++) {
      let current = gridArray[i][j];
      let up = gridArray[i - 1][j];
      let down = gridArray[i + 1][j];
      let left = gridArray[i][j - 1];
      let right = gridArray[i][j + 1];

      if (current > up && current > down && current > left && current > right) {
        gridArray[i][j] = "X";
      }
    }
  }

  let finalGrid = gridArray.map((row) => row.join(""));

  return finalGrid;
}

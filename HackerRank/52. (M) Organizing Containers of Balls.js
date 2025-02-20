//! Hard to do, Try again
function organizingContainers(container) {
  // Step 1: Calculate the total number of balls in each container
  const containerSums = container.map((row) => row.reduce((sum, value) => sum + value, 0));

  // Step 2: Calculate the total number of balls of each color
  const colorSums = container[0].map((_, colIndex) =>
    container.reduce((sum, row) => sum + row[colIndex], 0)
  );

  // Step 3: Sort both the container sums and color sums
  containerSums.sort((a, b) => a - b);
  colorSums.sort((a, b) => a - b);

  // Step 4: Compare both arrays
  for (let i = 0; i < containerSums.length; i++) {
    if (containerSums[i] !== colorSums[i]) {
      return "Impossible";
    }
  }

  return "Possible";
}

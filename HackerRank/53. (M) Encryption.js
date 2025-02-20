//! This medium question is doable.
// Nearly completed in first try
// Try giving it another try

function encryption(s) {
    // Remove spaces and get the length of the string
    s = s.replace(/\s+/g, '');
    const len = s.length;
    
    // Calculate the dimensions of the grid
    let rows = Math.floor(Math.sqrt(len));
    let cols = Math.ceil(Math.sqrt(len));
    
    // Adjust rows if necessary
    if (rows * cols < len) {
        rows++;
    }
    
    // Create the grid by adding spaces for the short rows if needed
    let grid = [];
    let index = 0;
    for (let i = 0; i < rows; i++) {
        grid[i] = s.slice(index, index + cols);
        index += cols;
    }
    
    // build the encrypted string
    let encryptedStr = '';
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            if (grid[row][col]) {
                encryptedStr += grid[row][col];
            }
        }
        encryptedStr += ' ';  // Add space after each column
    }
    

    return encryptedStr.trim()
}



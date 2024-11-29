function repeatedString(s, n) {
    // Count occurrences of 'a' in the original string
    let countA = 0;
    for (let char of s) {
        if (char === 'a') countA++;
    }

    // Calculate the total number of full repetitions of `s` in the first `n` characters
    const fullRepetitions = Math.floor(n / s.length);

    // Calculate the remaining characters after full repetitions
    const remainder = n % s.length;

    // Count 'a' in the remaining part
    let remainderCount = 0;
    for (let i = 0; i < remainder; i++) {
        if (s[i] === 'a') remainderCount++;
    }

    // Total 'a' count is from full repetitions and the remainder part
    return fullRepetitions * countA + remainderCount;
}

// Example usage:
console.log(repeatedString("aba", 10)); // Output: 7

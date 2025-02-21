function biggerIsGreater(w) {
    let arr = w.split('');
    
    // Step 1: Find the pivot (first character that is smaller than the next one from the right)
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    // If no pivot is found, the string is the last permutation
    if (i === -1) {
        return "no answer";
    }

    // Step 2: Find the smallest character that is larger than arr[i] from the right
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }

    // Step 3: Swap them
    [arr[i], arr[j]] = [arr[j], arr[i]];

    // Step 4: Reverse the substring after i to get the next lexicographical order
    let rightSubstr = arr.slice(i + 1).reverse();
    arr = arr.slice(0, i + 1).concat(rightSubstr);

    return arr.join('');
}

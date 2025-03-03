// ! !1 = longest subarray
function longestSubarray(arr) {
  let n = arr.length;
  let ans = 0;

  // O(n^2) is okay because of constraints.
  for (let i = 0; i < n; i++) {
    let w = [];
    let cnt = 0;

    for (let j = i; j < n; j++) {
      if (w.includes(arr[j])) {
        cnt++;
        continue;
      }

      if (w.length === 0) {
        w.push(arr[j]);
      } else if (w.length === 1) {
        if (Math.abs(w[0] - arr[j]) > 1) {
          break;
        } else {
          w.push(arr[j]);
        }
      } else {
        break;
      }
      cnt++;
    }
    ans = Math.max(ans, cnt);
  }
  return ans;
}

// ! !2 = parallel processing
function minTime(files, numCores, limit) {
  let ans = 0;
  let k = 1; // We track how many files we've assigned in parallel
  let v = []; // v = parallelizableFiles

  // Separate files that are divisible by numCores and those that are not
  for (let i = 0; i < files.length; i++) {
    if (files[i] % numCores !== 0) {
      ans += files[i];
    } else {
      v.push(files[i]);
    }
  }

  // Sort the files that are divisible by numCores in ascending order
  v.sort((a, b) => a - b);

  // Distribute the files that can be evenly divided by numCores
  for (let i = v.length - 1; i >= 0; i--) {
    if (k <= limit) {
      ans += Math.floor(v[i] / numCores); // Divide the file evenly across cores
      k++;
    } else {
      ans += v[i]; // If we can't use parallelism, add the whole value
    }
  }

  return ans;
}

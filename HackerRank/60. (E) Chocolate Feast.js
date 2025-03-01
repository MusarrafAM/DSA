//! Completed on first try but took 18 min try do this under 15 min

function chocolateFeast(n, c, m) {
  // Write your code here
  let wrapperCount = Math.floor(n / c);

  //initial count after eating initial chocolate
  let totalNumOfFeastChocolates = wrapperCount;

  while (wrapperCount >= m) {
    // excahnge choco
    let curNewChoco = Math.floor(wrapperCount / m);
    let tempLeftWrapper = wrapperCount - curNewChoco * m;

    // after eating new choco
    wrapperCount = tempLeftWrapper + curNewChoco;

    totalNumOfFeastChocolates += curNewChoco;
  }

  return totalNumOfFeastChocolates;
}

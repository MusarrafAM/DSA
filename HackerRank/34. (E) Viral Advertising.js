// Did it on the first try a little tricky

function viralAdvertising(n) {
  // Write your code here
  let peoplesLiked = 0;
  let peopleGotShared = 5;

  for (let i = 0; i < n; i++) {
    let currentPeopleLiked = Math.floor(peopleGotShared / 2);
    peoplesLiked += currentPeopleLiked;
    peopleGotShared = currentPeopleLiked * 3;
  }
  return peoplesLiked;
}

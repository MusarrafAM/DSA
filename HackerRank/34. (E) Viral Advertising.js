// Did it on the first try a little tricky


// new simple to understand solution
function viralAdvertising(n) {
  // Write your code here
  let totalLikes = 0
  let curPeoples = 5
  
  for(let i=1; i<=n; i++){
      
      let curLikes = Math.floor(curPeoples / 2)
      totalLikes += curLikes
      
      
      curPeoples = curLikes * 3
  }
  
  return totalLikes
  
}

// function viralAdvertising(n) {
//   // Write your code here
//   let peoplesLiked = 0;
//   let peopleGotShared = 5;

//   for (let i = 0; i < n; i++) {
//     let currentPeopleLiked = Math.floor(peopleGotShared / 2);
//     peoplesLiked += currentPeopleLiked;
//     peopleGotShared = currentPeopleLiked * 3;
//   }
//   return peoplesLiked;
// }



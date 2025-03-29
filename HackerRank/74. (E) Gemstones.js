//! Could not Complete on first try
//! whenever you have an array and need to get some of it need to use filter.

function gemstones(arr) {
  // Write your code here

  let newArraywithAllletters = arr.join(""); //! Very Improntant Method.
  let allUniqMin = [...new Set(newArraywithAllletters.split(""))];
  //! these above the methods saves a lot time Very very important.

  let genStones = allUniqMin.filter((min) => arr.every((stone) => stone.includes(min)));

  return genStones.length;
}


function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here

  // each apple + a
  // each orangs + b
  // check  whcih in the range of s, t

  // Proffesional way

  let applesOnHouse = apples
    .map((apple) => apple + a)
    .filter((num) => num >= s && num <= t).length;
  let orangesOnHouse = oranges
    .map((orange) => orange + b)
    .filter((num) => num >= s && num <= t).length;

  console.log(applesOnHouse);
  console.log(orangesOnHouse);

  // normwal way (using multiple for loops)

  // let houseStart = s
  // let houseEnd = t
  // let appleTreeP = a
  // let orangeTreeP = b
  // let appleFinalPosition = []
  // let OrangeFinalPosition = []
  // let appleonHouse = 0
  // let orangeonHouse = 0

  // for (let i=0; i<apples.length; i++){
  //     appleFinalPosition.push(apples[i] + appleTreeP)
  // }

  // for (let i=0; i<oranges.length; i++){
  //     OrangeFinalPosition.push(oranges[i] + orangeTreeP)
  // }

  // //chech if fruites in range

  // for(let i=0; i<appleFinalPosition.length; i++){
  //     if(appleFinalPosition[i] >= s && appleFinalPosition[i] <= t){
  //         appleonHouse++
  //     }
  // }

  // for(let i=0; i<OrangeFinalPosition.length; i++){
  //     if(OrangeFinalPosition[i] >= s && OrangeFinalPosition[i] <= t){
  //         orangeonHouse++
  //     }
  // }

  // console.log(appleonHouse)
  // console.log(orangeonHouse)
}

function theLoveLetterMystery(s) {
    // Write your code here
    let minNumbers = 0
    
    let reverse = s.split("").reverse().join("")
    
    if(s === reverse){
        return 0
    }
    
    let halfSize = Math.floor(s.length /  2)
    
    for(let i=0; i<halfSize; i++){
        let diff = Math.abs(s[i].charCodeAt() - reverse[i].charCodeAt())
        minNumbers += diff
     
    }
    
    return minNumbers

}
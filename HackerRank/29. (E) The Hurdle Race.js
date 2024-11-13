function hurdleRace(k, height) {
    // Write your code here
    let numOfDoses  = 0
    let maxHeight = Math.max(...height)
    
    numOfDoses = maxHeight - k
    
    if(numOfDoses <= 0){
        return 0
    }
    
    return numOfDoses

}
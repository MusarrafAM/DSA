function countingValleys(steps, path) {
    // Write your code here
    let altitude = 0
    let valleysCount = 0
    
    for(let i=0; i<steps; i++){
        if(path[i] == "U"){ //Up Step
            altitude++
            if(altitude == 0){  // when after step up if he is on sea level then he passes a valley.
                valleysCount++
            }
            
        }else if(path[i] == "D"){ // Down Step
            altitude--
        }
    }
    
    return valleysCount
}
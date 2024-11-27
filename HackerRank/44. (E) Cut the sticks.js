function cutTheSticks(arr) {
    // Write your code here
    let curLength = arr.length
    let shortestStick = Math.min(...arr)
    
    let numOfSticksInEachIteration = [curLength]
    
    
    do{
        let newArr = arr.map((item)=> item - shortestStick).filter((item)=> item > 0 )
        arr = newArr;
        
        if(arr.length > 0){
            numOfSticksInEachIteration.push(arr.length)
            shortestStick = Math.min(...arr)

        }
        curLength = arr.length
        
        
    }
    
    while(curLength > 0)
        
    
    return numOfSticksInEachIteration

}
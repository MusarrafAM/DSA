function alternatingCharacters(s) {
    // Write your code here
    
    let minDelReq = 0
    
    let currLetter = s[0]

    for(let i=1; i<s.length; i++){
        let nextLetter = s[i]
        
        if(currLetter === nextLetter){
            minDelReq++
        }else{
            currLetter = nextLetter
        }
         
    }
    
    
    return minDelReq

}
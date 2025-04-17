function twoArrays(k, A, B) {
    // Write your code here
    
    A.sort((a,b)=> a-b)
    B.sort((a,b)=> b-a)
    
    for(let i=0; i<A.length; i++){
        let value = A[i] + B[i]
        
        if( !(value >= k)){
            return "NO"
        }
    }
    return "YES"
            
}
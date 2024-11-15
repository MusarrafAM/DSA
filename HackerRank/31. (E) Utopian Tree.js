// very small tricky question.

function utopianTree(n) {
    // Write your code here
    let height = 1
    
    for(let i=1; i<=n; i++){   // i is the cycle.
        if(i%2 == 0){
            height += 1
        }else{
            height = height * 2
        }
        
    }
    
    return height

}
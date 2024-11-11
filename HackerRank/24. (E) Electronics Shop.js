function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    
    let mostExpensiveOption = -1
    
    for(let i=0; i<keyboards.length; i++){
        for(let j=0; j<drives.length; j++){
            let computerPrice = keyboards[i] + drives[j]
            if(computerPrice <= b && computerPrice > mostExpensiveOption){
                mostExpensiveOption = computerPrice
            }
        }
    }

    return mostExpensiveOption
}
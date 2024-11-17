function beautifulDays(i, j, k) {
    // Write your code here
    // beautifulDays  = i - reverse(i) % k == 0
    let beautifulDaysCount = 0 
    
    for(let start =i; start<=j; start++){
    //    reverse Number
        let reverseNumber = parseInt(start.toString().split("").reverse().join("")) 
        let value = Math.abs(start - reverseNumber)
        if(value % k == 0){
            beautifulDaysCount++
        }
    }
    return beautifulDaysCount
}
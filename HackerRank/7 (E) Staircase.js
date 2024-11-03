function staircase(n) {
    // Write your code here
    let symbol = "#"
    
    for(let i=1; i<=n ; i++){
        console.log( " ".repeat(n - i) + symbol.repeat(i))
    }
    
}
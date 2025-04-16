function luckBalance(k, contests) {
    // Write your code here
    let luckBalance = 0
    // save luck, only win important contenst.
    // she should loos 0 improtnat conest , and she sohud loose K number of improtant cont.
    
    let imporntant = []
    
    // normal
    for(let i=0; i<contests.length; i++){
        if(contests[i][1] == 1){
            imporntant.push(contests[i][0])
        }else{
            luckBalance += contests[i][0]
        }
        
    }
    
    imporntant.sort((a,b)=> b-a)
    
    for(let i=0 ; i<imporntant.length; i++){
        if(i >= k){
            luckBalance -= imporntant[i]
        }else{
            luckBalance += imporntant[i]
        }
        
    }
    
    return luckBalance

}
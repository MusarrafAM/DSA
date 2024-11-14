function designerPdfViewer(h, word) {
    // Write your code here
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z"]
    
    let tallest = 0
    let totalNumber = word.length
    let wordList = word.split("")
    
    wordList.forEach((letter)=>{
        let letterIndex = alphabet.indexOf(letter)
        let height =h[letterIndex]
        if(height > tallest){
            tallest = height
        }
    })
    
    
    return tallest * totalNumber
    
}
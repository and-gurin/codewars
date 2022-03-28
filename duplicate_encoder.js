function duplicateEncode(word){
    return word.toLowerCase().split('').map((t, i, a)=>{
     return a.indexOf(t) == a.lastIndexOf(t) ? '(' : ')'
    }).join('')
}

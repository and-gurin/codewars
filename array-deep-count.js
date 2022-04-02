function deepCount(a){
 return a.reduce((acc, el) => acc + (Array.isArray(el) ? deepCount(el):0), a.length)
}
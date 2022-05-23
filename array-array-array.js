function explode(x){
    let res = [];
    if ( typeof x[0] === 'number' && typeof x[1] === 'number'){
        for (let i = 0; i < x[0]+x[1]; i++){
            res.push(x)
        }
        return res
    }
    if (typeof x[0] === 'number' || typeof x[1] === 'number'){
         if (typeof x[0] === 'number') {
           for (let i = 0; i < x[0]; i++){
            res.push(x)
        }
         }
       if (typeof x[1] === 'number') {
           for (let i = 0; i < x[1]; i++){
            res.push(x)
        }
         }
        return res
    }
    if ( typeof x[0] === 'string' && typeof x[1] === 'string'){
        return 'Void!'
    }
}
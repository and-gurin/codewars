function positiveSum(arr) {
    let result = arr.reduce(function (acc, e){
  
        return  acc + (e > 0 ? e : 0);
        
    }, 0)
    return result
 }
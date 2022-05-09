function findEvenIndex(arr){
  let left = 0;
  let right = 0;

  if(arr.length == 0){
    return -1;
  }
  
  for(let i = 0; i < arr.length; i++){
    if(i == 0){
      right = arr.slice(1).reduce((acc, el) => acc + el, 0);
      if(right === i){
        return i;
      }
    }else{
      left = arr.slice(0, i).reduce((acc, el) => acc + el, 0);
      right = arr.slice(i+1).reduce((acc, el) => acc + el, 0);
      if(left == right){
        return i;
      }
    }
  }

  return -1;

}
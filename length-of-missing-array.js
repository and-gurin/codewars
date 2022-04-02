function getLengthOfMissingArray(arrayOfArrays) {

  let arr = (arrayOfArrays || []).map(s => s ? s.length : 0).sort(( a, b ) =>  a - b);
  if (arr.includes(0)) {return 0};
  for(let i = 0; i<arr.length; i++) {
    let diff = arr[i+1] - arr[i];
    if(diff > 1) return arr[i] + 1;
  }
  return 0
}
function getCount(str) {
  var vowelsCount = 0;
  var arr = str.split('')
  for (let i = 0; i<arr.length; i++) {
    if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u'){
      vowelsCount +=1
    }
  }
  return vowelsCount;
}
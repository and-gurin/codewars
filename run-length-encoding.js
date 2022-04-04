var runLengthEncoding = function(str){
  const res = [];
  let n = 1;
  for (let i = 0; i<str.length; i++){
      if (str[i] !== str[i + 1]){
      res.push([n, str[i]]);
      n = 1;
      } else {
      n++;
      }
  }
  return res;
}
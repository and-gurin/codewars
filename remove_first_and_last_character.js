function removeChar(str){
    let strT = str.split('');
     strT.pop();
     strT.shift();
     return strT.join('');
   }
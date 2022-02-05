function colourAssociation(array){
    let arrayObj = [];
    for (let i = 0; i < array.length; i++) {
      arrayObj.push({[array[i][0]] : array[i][1]});
    }
  return arrayObj;
  }
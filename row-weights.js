function rowWeights(array){
  let teamA = 0;
  let teamB = 0;
  let res = []
  for (let i=0; i<array.length; i++){
    i % 2 === 0 ? teamA = teamA + array[i] : teamB = teamB + array[i]
  }
  res.push(teamA, teamB)
  return res
}
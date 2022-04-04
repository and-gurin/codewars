function myLanguages(results) {
  let res = [];
  let reverseRes;
  for (let key in results) {
    if (results[key] >= 60)
    res.push(key)
  }
  return res.sort((a,b)=>results[b]-results[a])
}
function solution(number){
  let arr = []
  let result = 0
  if (number < 0) return 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      arr.push(i)
  }
   arr.map(el => result += el)
  return result
}
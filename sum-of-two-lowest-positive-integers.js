function sumTwoSmallestNumbers(numbers) {  
  let numSort = numbers.sort((a, b) => a - b)
  return numSort[0] + numSort[1]
}
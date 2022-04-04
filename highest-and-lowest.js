function highAndLow(nums){
  let arr = nums.split(' ');
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}
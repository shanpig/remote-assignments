function max(numbers){
  let maxNum = numbers[0];
  numbers.forEach(num=>{
    maxNum = num > maxNum ? num : maxNum;
  })
  return maxNum;
}

console.log(max([1,2,4,5]));
console.log(max([5,2,1,7,6]));
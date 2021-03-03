function twoSum(nums, target){
  let ans;
  nums.forEach((num, idx)=>{
    if (num >= target) return;

    if (nums.slice(idx).includes(target-num)) 
      ans = [idx, nums.indexOf(target-num)];
  })
  return ans? ans: "Not found";
}

console.log(twoSum([2,7,11,15], 9));

var removeDuplicates = function(nums) {
  let numCounting = {};
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
      if (numCounting[nums[i]] === 2) {
          nums.splice(i, 1);
          i -= 1;
      } else {
          if (numCounting[nums[i]] === undefined) {
              numCounting[nums[i]] = 1;
          } else {
              numCounting[nums[i]] += 1;
          }
          k += 1;
      }
  }
  return k;
};
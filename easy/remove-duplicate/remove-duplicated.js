
/* First Solution */
var removeDuplicates_1 = function(nums) {
  let checkObject = {};
  let uniqueCount = 0;
  for (let i = 0; i < nums.length; i++) {
      if (checkObject[nums[i]]) {
          nums.splice(i, 1);
          i -= 1;
      } else {
          checkObject[nums[i]] = true;
          uniqueCount += 1;
      }
  }

  console.log(uniqueCount, nums);
  return uniqueCount;
};

/* Improved Solution */
var removeDuplicates_2 = function(nums) {
  if (nums.length <= 1) { return nums.length } 
    let unique = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] != nums[i]) {
            nums[unique] = nums[i];
            unique += 1;
        } 
    }

    return unique;
};
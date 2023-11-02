var jump = function(nums) {
  let targetIndex = nums.length - 1;
  if (targetIndex <= 0) {
      return 0;
  } 

  let pointer = 0;
  let steps = 0;
  while (targetIndex != 0) {
      if (pointer + nums[pointer] >= targetIndex) {
          targetIndex = pointer;
          pointer = 0;
          steps += 1;
      } else {
          pointer += 1;
      }
  }

  return steps;
};
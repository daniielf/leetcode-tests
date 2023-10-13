var twoSum = function(nums, target) {
  const readNums = {};

  for (let i = 0; i < nums.length; i++) {
      const complement = (target - nums[i]);

      if (readNums[complement] !== undefined) {
          return [i, readNums[complement]]
      }

      readNums[nums[i]] = i;
  }
  
  return [];
};
var searchInsert = function(nums, target) {
  let middleIndex = Math.floor(nums.length/2);
  let middle = nums[middleIndex];
  if (middle === target) return middleIndex;

  if (nums.length === 1) {
      if (middle < target) {
          return middleIndex + 1;
      } else {
          return middleIndex;
      }
  }

  if (middle < target) {
      return middleIndex + searchInsert(nums.splice(middleIndex, nums.length - 1), target);
  } else {
      return searchInsert(nums.splice(0, middleIndex), target);
  }
};
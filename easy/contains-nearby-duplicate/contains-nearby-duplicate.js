var containsNearbyDuplicate = function(nums, k) {
  let numberIndexes = {};

  for (let i = 0; i < nums.length; i ++) {
      let caseNumber = nums[i];
      if (numberIndexes[caseNumber] === undefined) {
          numberIndexes[caseNumber] = i
      } else {
          if (Math.abs(numberIndexes[caseNumber] - i) <= k) {
              return true
          } else {
              numberIndexes[caseNumber] = i;
          }
      }
  }

  return false;
};
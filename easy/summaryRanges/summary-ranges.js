var summaryRanges = function(nums) {
  let range = [];
  let allRanges = [];

  for (let index = 0; index < nums.length; index++) {
      let currentNum = nums[index];
      if (range.length === 0) {
          range.push(currentNum);
      }

      if (nums[index + 1] && nums[index + 1] - currentNum === 1) {
          continue;
      } else {
          range.push(currentNum);
          let first = range[0];
          let last = range[range.length - 1];
          if (first === last) {
              allRanges.push(`${first}`)
          } else {
              allRanges.push(`${first}->${last}`);
          }
          range = [];
      }
  }

  return allRanges;
};
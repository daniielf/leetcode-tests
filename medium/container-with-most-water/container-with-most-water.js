
var getAmount = (height, start, end) => {
  return Math.min(height[start], height[end]) * (end - start);
}

/**
* @param {number[]} height
* @return {number}
*/
var maxArea = function(height) {
  if (height.length === 2) {
      return getAmount(height, 0, 1);
  }
  let start = 0;
  let end = height.length - 1;
  let bestResult = 0;

  while (start < end) {
      bestResult = Math.max(bestResult, getAmount(height, start, end))
     
      if (height[start] < height[end]) {
          start += 1;
      } else {
          end -= 1;
      }
  }

  return bestResult;
};
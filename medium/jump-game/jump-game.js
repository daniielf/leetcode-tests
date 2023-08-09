
/** Solution I */
var canJump = function(nums) {
    if (nums.length === 1) return true;
    let lastIndex = nums.length - 1;
    let globalReachable = nums[0];
    let visitedIndexes = {};
    for (let jumpStartIndex = 0; jumpStartIndex < globalReachable; jumpStartIndex ++) {
        if (visitedIndexes[jumpStartIndex]) { continue };
        visitedIndexes[jumpStartIndex] = true;
        let sumOfJumpReachableIndex = nums[jumpStartIndex];
        
        let nextJump = nums[jumpStartIndex + sumOfJumpReachableIndex];

        let localMaxReachable = jumpStartIndex + sumOfJumpReachableIndex;

        while (localMaxReachable < lastIndex && nextJump != 0) {
            visitedIndexes[sumOfJumpReachableIndex] = true;

            sumOfJumpReachableIndex += nextJump;
            nextJump = nums[jumpStartIndex + sumOfJumpReachableIndex];
            if (jumpStartIndex + sumOfJumpReachableIndex > localMaxReachable) {
                localMaxReachable = jumpStartIndex + sumOfJumpReachableIndex;
            }
            
        }

        if (localMaxReachable >= lastIndex) {
            return true
        }

        if (localMaxReachable > globalReachable) {
            globalReachable = localMaxReachable
        }
    }

    return false;
};

/** Solution II */
var canJump_2 = function(nums) {
    if (nums.length === 1) return true;
    let maxJump = 0;
    for (let i = 0; i < nums.length; i++) {
      if (i > maxJump) {
        return false
      }

      let possibleJump = i + nums[i];
      maxJump = maxJump > possibleJump ? maxJump : possibleJump;
    }

    return true;
};
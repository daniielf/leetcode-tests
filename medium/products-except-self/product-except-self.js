var productExceptSelf = function(nums) {
  let zeros = 0;
  let sum = nums.reduce((acc, elem) => {
      if (elem === 0) {
          zeros += 1;
          return acc;
      } else {
          return acc === 0 ? elem : elem * acc;
      }
  }, 0);

  return nums.map((elem) => {
      if (elem === 0) {
          return zeros > 1 ? 0 : sum ;
      } else {
          return zeros > 0 ? 0 : sum / elem;
      }
  })
};
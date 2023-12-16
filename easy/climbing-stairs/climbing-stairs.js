var climbStairs = function(n) {
  if (n < 2) { return 1;}

  let stepOne = 1;
  let stepTwo = 1;
  let stepThree = 0;

  for (let i = 2; i <= n; i++) {
      stepThree = stepOne+stepTwo
      stepOne = stepTwo;
      stepTwo = stepThree;
  }

  return stepThree;
};
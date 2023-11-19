var twoSum = function(numbers, target) {
  if (numbers.length === 2) { return [1,2] };
  let smallPointer = 0;
  let highPointer = 1;

  while (numbers[smallPointer] + numbers[highPointer] !== target) {
      if (numbers[smallPointer] + numbers[highPointer] < target) {
          smallPointer += 1;
          highPointer += 1;
      }

      if (numbers[smallPointer] + numbers[highPointer] > target) {
          smallPointer -= 1;
      }
  }

  return [smallPointer + 1, highPointer + 1];
};
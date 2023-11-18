var trap = function(height) {
  let stored = 0;

  let leftPointer = 0;
  let highestLeft = -1;

  let rightPointer = height.length - 1;
  let highestRight = -1;

  while (leftPointer < rightPointer) {
      let leftTower = height[leftPointer];
      let rightTower = height[rightPointer];

      if (leftTower < rightTower) {
          // Operating on Left Side
          if (leftTower > highestLeft) {
              highestLeft = leftTower;
          } else {
              stored += (highestLeft - leftTower);
          }

          leftPointer += 1;
      } else {
          // Operating on Right Side
          if (rightTower > highestRight) {
              highestRight = rightTower;
          } else {
              stored += (highestRight - rightTower);
          }

          rightPointer -= 1;
      }
  }

  return stored;
};
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (t.length > s.length) { return "" };
  let minLength = Number.POSITIVE_INFINITY;
  let leftPointer = 0;
  let rightPointer = 0;
  let bestLeft = 0;
  let bestRight = 0;

  let chars = t.split('');
  let expectedValues = {};
  chars.forEach((char) => {
      expectedValues[char] = expectedValues[char] === undefined ? 1 : expectedValues[char] + 1;
  })


  let windowMap = {};
  let matchingCount = 0;
  let expectedMatchingCount = Object.keys(expectedValues).length;
  // Walk Right Pointer until find a valid window
  while (rightPointer < s.length) {
      let incomingChar = s[rightPointer];

      if (expectedValues[incomingChar]) {
          windowMap[incomingChar] = windowMap[incomingChar] === undefined ? 1 : windowMap[incomingChar] + 1;

          if (expectedValues[incomingChar] === windowMap[incomingChar]) {
              matchingCount+= 1;
          }
      }

      let isWindowDone = matchingCount === expectedMatchingCount;

      // Found a window with all matches
      if (isWindowDone) {
          let windowSize = (rightPointer - leftPointer) + 1;
          if (windowSize < minLength) {
              minLength = windowSize;
              bestLeft = leftPointer;
              bestRight = rightPointer;
          }

          // Walk Left Pointer
          while (leftPointer <= rightPointer - t.length && matchingCount === expectedMatchingCount) {
              let removingChar = s[leftPointer];

              if (windowMap[removingChar]) {
                  windowMap[removingChar] -= 1;
                  if (windowMap[removingChar] < expectedValues[removingChar]) {
                      matchingCount -= 1;
                  }
              }

              leftPointer += 1;

              if (matchingCount === expectedMatchingCount) {
                  let windowSize = (rightPointer - leftPointer) + 1;
                  if (windowSize < minLength) {
                      minLength = windowSize;
                      bestLeft = leftPointer;
                      bestRight = rightPointer;
                  }
              }
          }
      }

      rightPointer += 1;
  }
  return minLength === Number.POSITIVE_INFINITY ? "" : s.slice(bestLeft, bestRight + 1);
};
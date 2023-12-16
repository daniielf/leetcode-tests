var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) { return s.length };

  let leftIndex = 0;
  let bestMatch = 0;
  while (s.length - leftIndex > bestMatch) {
      let mappedChars = {};

      mappedChars[s[leftIndex]] = true;

      for (let rightIndex = leftIndex + 1; rightIndex < s.length; rightIndex++) {
          if (mappedChars[s[rightIndex]]) {
              localMatch = 0;
              break;
          } else {
              mappedChars[s[rightIndex]] = true;
          }
      }
      
      let currentCount = Object.keys(mappedChars).length;
      bestMatch = Math.max(bestMatch, currentCount);

      leftIndex += 1;
  }

  return bestMatch;
};
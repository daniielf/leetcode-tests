var longestCommonPrefix = function(strs) {
  let currentPrefix = strs[0];
  while (currentPrefix.length > 0) {
      let allContains = true;

      for (let word of strs) {
          if (word.slice(0, currentPrefix.length) !== currentPrefix) {
              allContains = false;
              break;
          }
      }

      if (allContains) {
          return currentPrefix;
      } else {
          currentPrefix = currentPrefix.slice(0, currentPrefix.length - 1);
      }
  }
  return "";
};
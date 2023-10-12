var wordPattern = function(pattern, s) {
  let map = {};
  let map2 = {};
  let words = s.split(' ');

  if (pattern.length !== words.length) return false;

  for (let i = 0; i < pattern.length; i++) {
      let letterInPattern = pattern[i];

      if (words[i] === "constructor") {
          words[i] = "_constructor";
      }

      if (map[letterInPattern] === undefined) {
          map[letterInPattern] = words[i];
      }

      if (map2[words[i]] === undefined) {
          map2[words[i]] = letterInPattern;
      }

      if (map[letterInPattern] !== words[i] || map2[words[i]] !== letterInPattern) {
          console.log(map, map2)
          return false
      }
  }
  return true;
};
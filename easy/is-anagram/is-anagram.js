
var isAnagram = function(s, t) {
  if (s.length !== t.length) { return false };

  let mapS = {};
  let mapT = {};
  for (let i = 0; i < s.length; i++) {
      if (mapS[s[i]] === undefined) {
          mapS[s[i]] = 1;
      } else {
           mapS[s[i]] += 1;
      }

      if (mapT[t[i]] === undefined) {
          mapT[t[i]] = 1;
      } else {
          mapT[t[i]] += 1;
      }
  }

  for (let key of Object.keys(mapS)) {
      if (mapS[key] !== mapT[key]) {
          return false;
      }
  }

  return true;
};
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) { return false }
  let mapStoT = {};
  let mapTtoS = {}
  for (let i = 0; i< s.length ; i++) {
      // Letter have not been mapped
      if (mapStoT[s[i]] !== undefined || mapTtoS[t[i]] !== undefined) {
          if (mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]) {
              return false
          }
      } else {
          mapStoT[s[i]] = t[i];
          mapTtoS[t[i]] = s[i];
      }
  }
  return true;
};
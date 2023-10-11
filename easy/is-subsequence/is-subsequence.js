var isSubsequence = function(s, t) {
  let indexOfMatch = 0;

  while (s.length !== 0 && t.length !== 0) {
      let searchChar = s[0];
      indexOfMatch = t.indexOf(searchChar);
      if (indexOfMatch === -1) { return false }
      s = s.slice(1);
      t = t.slice(indexOfMatch + 1);
  }

  return s.length === 0;
};
var hIndex = function(citations) {
  if (citations.length === 1) { 
      return (citations[0] === 0) ? 0 : 1;
  };

  let inverted = citations.sort((a,b) => b-a);
  for (let i = 0; i < inverted.length; i++) {

      if (i + 1 > inverted[i]) {
          return i;
      }
  }

  return inverted.length;
};
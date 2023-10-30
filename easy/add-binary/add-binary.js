var addBinary = function(a, b) {
  let sum = 0;
  let result = ""
  while (a.length || b.length) {
      let popA = Number(a.slice(-1));
      a = a.slice(0, -1);
      
      let popB = Number(b.slice(-1));
      b = b.slice(0, -1);

      if (popA === undefined) {
          popA = 0;
      };

      if (popB === undefined) {
          popB = 0;
      };

      sum += popA + popB;

      if (sum === 1) {
          sum = 0;
          result = `1` + result;
          continue;
      }

      if (sum === 2) {
          sum = 1;
          result = `0` + result;
          continue;
      }

      if (sum === 3) {
          sum = 1;
          result = `1` + result;
          continue;
      } else {
          result = '0' + result;
      }
  }

  if (sum > 0) {
      result = sum + result;
  }
  
  return (result.length ? result : "0")
};
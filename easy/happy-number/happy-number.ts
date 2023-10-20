
var isHappy = function(n) {
  if (n == 1) { return true };
  let triedNumbers = {};
  let checkValue = n;
  while (true) {
      let total = String(checkValue).split("").reduce((sum, value) => {
          return sum + Number(value) * Number(value);;
      }, 0);
      if (total === 1) {
          return true;
      } else {
          if (triedNumbers[total] !== undefined) {
              return false;
          } else {
              triedNumbers[total] = true;
              checkValue = total;
          }
      }
  }
};
var isPalindrome = function(s) {
  if (s.trim() === "") {
      return true;
  }

  let str = "";

  // first convert the string into lowercase
  const lowerString = s.toLowerCase();

  // join the string if it's alpha-numeric
  for (let i = 0; i <= lowerString.length - 1; i++) {
      if (
          (lowerString[i] >= "a" && lowerString[i] <= "z") ||
          (lowerString[i] >= "0" && lowerString[i] <= "9")) {
          str += lowerString[i];
      }
  }

  let start = 0; // 0
  let end = str.length - 1; // 1

  while (start < end) {
      let leftPointer = str[start].toLowerCase();
      let rightPointer = str[end].toLowerCase();

      if (leftPointer !== rightPointer) {
          return false;
      }

      start+= 1;
      end-= 1;
  }

  return true;
};
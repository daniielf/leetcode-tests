var reverseWords = function(s) {
  const trim = s.trim();
  let word = "";
  let array = [];

  for (let char of trim) {
      if (char !== " ") {
          word += char;
      } else {
          if (word.length) {
              array = [word].concat(array);
              word = "";
          }
      }
  } 
  array = [word].concat(array);
  return array.join(" ");
};
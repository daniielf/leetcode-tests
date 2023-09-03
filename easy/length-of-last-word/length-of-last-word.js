
// Avoiding trim
var lengthOfLastWord = function(s) {
  const possibleWords = s.split(' ');
  const words = [];
  for (let word of possibleWords) {
      if (word && word !== ' ') {
          words.push(word)
      }
  }
  console.log(words);
  return words[words.length - 1].length
};
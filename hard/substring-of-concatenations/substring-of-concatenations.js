var findSubstring = function(s, words) {
  const wordLength = words[0].length;
  const substringLength = words.length * wordLength
  if (s.length < substringLength) { return [] };

  let cachedResults = {};

  function isBuildable(substring) {
      if (cachedResults[substring] !== undefined ) { return cachedResults[substring] };
      let wordStartIndex = 0;
      let copyOfWords = [...words];

      while (wordStartIndex != substring.length) {
        let word = substring.slice(wordStartIndex, wordStartIndex + wordLength);

        let indexOfWord = copyOfWords.indexOf(word);
        console.log('Index of', word, indexOfWord);
        if (indexOfWord === -1) {
          return false;
        } else {
          copyOfWords.splice(indexOfWord, 1)
        }

        wordStartIndex += wordLength;
      }

      return true;
  }

  
  let matchingIndexes = [];
  let index = 0;
  // Validate each substring in 's'
  while (index <= (s.length - substringLength)) {

    let substring = s.slice(index, index + substringLength);
    let result = isBuildable(substring)
    cachedResults[substring] = result;
    if (result) {
      matchingIndexes.push(index);
    }


    index += wordLength;
  }

  return matchingIndexes
};
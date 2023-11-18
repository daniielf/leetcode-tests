var fullJustify = function(words, maxWidth) {
  let sentencesArray = [];
  let currentLength = 0;
  let sentence = [];
  for (let word of words) {
      if ((word.length + currentLength) + sentence.length <= maxWidth) {
          currentLength += word.length; 
          sentence.push(word);
      } else {
          currentLength = word.length;
          sentencesArray.push([...sentence]);
          sentence = [word];
      }
  }

  if (sentence.length) {
      sentencesArray.push([...sentence]);
  }

  let resultSentence = [];
  for (let index = 0; index < sentencesArray.length; index++) {
      let sentence = sentencesArray[index];
      let spacesRequired = maxWidth - sentence.reduce((acc, elem) => acc + elem.length, 0);

      let justifiedSentence = "";

      if (index === sentencesArray.length - 1) {
          let betweenWordsSpaces = sentence.length - 1;
          justifiedSentence = sentence.join(" ");
          justifiedSentence += " ".repeat(spacesRequired - betweenWordsSpaces);
          resultSentence.push(justifiedSentence);
          continue;
      }

      if (sentence.length === 1) {
          justifiedSentence += sentence[0] + " ".repeat(spacesRequired);
          resultSentence.push(justifiedSentence);
          continue;
      }

      for (let index2 = 0; index2 < sentence.length - 1; index2++) {
          let word = sentence[index2];
          let spacesToDo = Math.ceil(spacesRequired / (sentence.length - 1 - index2));
          justifiedSentence += word + " ".repeat(Math.min(spacesToDo));
          spacesRequired -= spacesToDo;
      }
      resultSentence.push(justifiedSentence + sentence.pop());
  }

  return resultSentence
};
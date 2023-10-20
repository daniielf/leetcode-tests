var isValid = function(s) {
  let elements = s.split('');
  let closingStack = []

  const map = {
      "}": "{",
      "]": "[",
      ")": "(",
  };

  while (elements.length !== 0) {
      let element = elements.pop();
      if (map[element]) {
          closingStack.push(element);
      } else {
          let closingElement = closingStack.pop();
          if (element !== map[closingElement]) {
              return false
          }
      }
  }

  return closingStack.length === 0;
};
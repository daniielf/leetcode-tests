var getMinimumDifference = function(root) {
    
  let map = {};

  const innerMinimum = (root, map) => {
      if (!root) { return };
      map[root.val] = true;
      innerMinimum(root.left, map);
      innerMinimum(root.right, map);
  };

  innerMinimum(root, map);
  let listOfValues = Object.keys(map).sort((a,b) => (a-b));
  let diffs = listOfValues.map((elem, index) => {
      if (listOfValues[index + 1]) {
          return Math.abs(elem - listOfValues[index+ 1]);
      }
  }).sort((a,b) => (a-b));
  return diffs[0]
};

/** Performatic answer */
var getMinimumDifference = function(root) {
  const DFS = (node, lowerValue, higherValue) => {
      if (!node) return higherValue - lowerValue;
      const left = DFS(node.left, lowerValue, node.val);
      const right = DFS(node.right, node.val, higherValue);
      return Math.min(left, right);
  };
  return DFS(root, -Infinity, Infinity);
};

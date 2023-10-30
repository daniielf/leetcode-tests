var averageOfLevels = function(root) {
  let map = {}

  var fillMapForLevel = (root, level) => {
      if (!root) { return };

      if (map[level] !== undefined) {
          map[level] = [root.val, ...map[level]];
      } else {
          map[level] = [root.val];
      }

      if (!root.left && !root.right) {
          return;
      }  
      
      let nextLevel = level + 1;
      fillMapForLevel(root.left, nextLevel);
      fillMapForLevel(root.right, nextLevel);
  };

  fillMapForLevel(root, 0);

  Object.keys(map).forEach((key) => {
      map[key] = map[key].reduce((elem, acc) => elem+acc, 0) / map[key].length;
  });

  return Object.values(map);
};
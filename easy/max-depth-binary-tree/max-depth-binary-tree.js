var maxDepth = function(root) {
  if (!root) { return 0 };
  let leftSize = 0;
  let rightSize = 0;
  if (root.left) {
      leftSize = maxDepth(root.left)
  }

  if (root.right) {
      rightSize = maxDepth(root.right)
  }   
  
  return 1 + (leftSize > rightSize ? leftSize : rightSize)
};
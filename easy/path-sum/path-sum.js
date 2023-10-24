var hasPathSum = function(root, targetSum) {
  if (!root) { return false };
  let nextTarget = targetSum - root.val;

  if (!root.left && !root.right) {
      return nextTarget === 0;
  }

  return hasPathSum(root.left, nextTarget) || hasPathSum(root.right, nextTarget) ;
};
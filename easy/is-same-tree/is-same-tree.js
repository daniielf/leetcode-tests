var isSameTree = function(p, q) {
  if (!p && !q) { return true };
  if (p?.val !== q?.val) { return false };


  let isLeftEqual = isSameTree(p.left, q.left);
  let isRightEqual = isSameTree(p.right, q.right);
  
  return isLeftEqual && isRightEqual;
};
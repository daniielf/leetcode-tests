var invertTree = function(root) {
  if (!root) { return null }
  if (!root.left && !root.right) {
      return root;
  }
  let aux;
  aux = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(aux);
  return root;
};
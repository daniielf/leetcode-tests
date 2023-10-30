var sortedArrayToBST = function(nums) {
  if (nums.length === 0) { return null }
  if (nums.length === 1) { return createNode(nums[0]); }
  
  let leftArray = nums.splice(0, nums.length/2);
  let rightArray = nums.splice(1, nums.length - 1);
  let root = createNode(nums[0]);

  root.left = sortedArrayToBST(leftArray);
  root.right = sortedArrayToBST(rightArray);

  return root;
};

var createNode = (val) => {
  return { val, left: null, right: null };
}
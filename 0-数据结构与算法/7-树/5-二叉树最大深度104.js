// 给定一个二叉树，找出其最大深度。
// 1. 建立遍历记录深度
//2. 深度遍历整棵树并记录每个节点层级

var maxDepth = function (root) {
  if (!root) return 0;//如果没有子节点说明是叶子节点
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return Math.max(left,right)+1;
}
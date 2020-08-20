// 先序遍历
// 如果根节点为空就返回
// 访问根节点
// 对根节点左子树先序遍历
// 对根节点右子树先序遍历
const preorder = (root) => {
  // 如果根节点为空就返回
  if (!root) { return }
  // 1.访问根节点
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}

// 中序遍历
// 1.对根节点左子树进行中序遍历
// 2.访问根节点
// 3.对根节点右子数中序遍历
const inorder = root => {
  if (!root) { return }
  inorder(root.left)
  console.log(root.val)
  inorder(root.right)
}

// 后序遍历
// 对根节点左子树进行后序遍历
// 对根节点右子树进行后序遍历
// 访问根节点
const postorder = root => {
  if (!root) { return }

  postorder(root.left)
  postorder(root.right)
  console.log(root.val)
}



const binaryTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  }
}

/* 
    1
  2   3
 4 5  6  7
 */
preorder(binaryTree) //1 2 4 5 3 6 7

inorder(binaryTree) //4 2 5 1 6 3 7

postorder(binaryTree) //4 5 2 6 7 3 1
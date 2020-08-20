
const preorder = root => {
  if (!root) return;
  let stack = [root];
  while (stack.length) {
    // 1.出栈并访问根节点
    let n = stack.pop()
    console.log(n.val)
    // 2.栈后进先出， 
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
  }
}

const inorder = root => {
  if (!root) return;
  let stack = [];
  // 1.把所有的左子树丢到堆栈
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left;
    }
    // 2.弹出最尽头的
    const n = stack.pop();
    console.log(n.val)
    p = n.right;
  }
}


// 后序遍历：左右根 我们可以变成根右左
// 然后利用先序遍历的逻辑实现逆序访问
// 然后把访问操作变成入栈操作，
const postorder = root=>{
  if(!root) return;
  // 函数调用栈
  let stack = [root];
  // 倒置栈
  let outputstack = []
  while(stack.length){
    const n = stack.pop();
    outputstack.push(n)
    if(n.left) stack.push(n.left)
    if(n.right) stack.push(n.right)

  }
  while(outputstack.length){
    console.log(outputstack.pop().val)
  }
  
}
/*
    1
  2   3
 4 5  6  7
 */
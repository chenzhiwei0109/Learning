/*
广度优先遍历适合求最小深度。
使用队列。
 */
 /* 
遍历整棵树，把当前节点和深度放到队列里作为一项。
如果队列有值，就出队。
如果出队的那个没有左右子树就返回深度
如果出队的那个有左右子树，就把左子和深度+1入队，右子和深度+1入队
  */
function minDepth(root){
  if(!root){return 0}
  const q = [[root,1]];
  while(q.length){
    let [n,deep]=q.shift();
    if(!n.left&&!n.right){return deep}
    if(n.left) q.push([n.left,deep+1])
    if(n.right) q.push([n.right,deep+1])
  }
}
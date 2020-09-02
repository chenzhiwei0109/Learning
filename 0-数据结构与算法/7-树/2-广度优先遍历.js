/* 
  使用队列不断的出队访问，直到队为空。
 */
const bfs = (root) => {
  const q = [root]
  while (q.length) {
    const n = q.shift();
    console.log(n.val)
    n.children.forEach(child => {
      q.push(child)
    })
  }
}
const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: []
        }, {
          val: 'e',
          children: []
        }
      ]
    }, {
      val: 'c',
      children: [
        {
          val: 'f',
          children: []
        }, {
          val: 'g',
          children: []
        }
      ]
    }
  ]
}
bfs(tree)
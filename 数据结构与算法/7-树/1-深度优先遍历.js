  const dfs = (tree)=>{
    console.log(tree.val)
    tree.children.forEach(dfs)
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

  dfs(tree)

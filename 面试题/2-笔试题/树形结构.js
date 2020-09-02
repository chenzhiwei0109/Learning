var locationList = [
  { id: 0, name: '中国' },
  { id: 1, pid: 0, name: '北京市' },
  { id: 2, pid: 1, name: '昌平区' },
  { id: 3, pid: 1, name: '海淀区' },
]
let obj = {
  id: 0,
  name: '中国',
  sub: [
    {
      id: 1,
      name: '北京'
    }
  ]
}

function trans(arr) {
  let map = {}
  let tree = {};
  let parentNode;
  arr.forEach(item => {
    map[item.id] = item
  })
  arr.forEach(item => {
    if(!map[item.pid]){
      tree = item
    }
    parentNode = map[item.pid];
    if (parentNode) {
      (parentNode.sub || (parentNode.sub = [])).push(item)
    }
  })
  tree.sub = parentNode;
  console.log(tree)  
}
trans(locationList)


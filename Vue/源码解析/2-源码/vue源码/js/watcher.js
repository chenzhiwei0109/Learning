class Watcher {
  constructor(vm, key, cb) {
    // 获取vue实例
    this.vm = vm;
    // 获取对象属性名
    this.key = key

    this.cb = cb;

    // 把自己放在Dep.target里
    Dep.target = this

    // 获取旧值，同时触发getter方法调用addSub添加属性
    this.oldValue = this.getVal(this.key)

    //清空Dep.target
    Dep.target = null;

  }

  getVal(str) {
    const path = str.split('.');
    let p = this.vm.$data;
    path.forEach(k => {
      p = p[k]
    })
    return p
  }

  // 当数据发生变化时更新视图
  update() {
    let newValue = this.getVal(this.key)
    if (this.oldValue === newValue) {
      return
    }
    this.cb(newValue)

  }
}
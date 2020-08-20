class Observer {
  constructor(data) {
    this.walk(data)
  }

  walk(data) {
    // 判断是否是对象
    if (!data || typeof data !== 'object') {
      return
    }
    // 遍历对象所有属性
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }
  // 转换gettersetter
  defineReactive(data, key, val) {
    //如果val是对象，就把val内部的数据转换成响应式

    // 创建dep对象负责收集依赖发送通知
    let dep = new Dep()


    this.walk(val)
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get() {

        //收集依赖
        Dep.target&&dep.addSub(Dep.target)

        return val //返回的就是上面说的val变量，因此在set函数了改变了val，这里返回的也会变，都是同一个变量
      },
      set: (newVal) => {
        if (newVal === val) {
          return
        }
        // 新赋值的属性如果是对象
        this.walk(newVal);
        val = newVal

        // 响应式--发送通知
        dep.notify()
      }
    })
  }
}
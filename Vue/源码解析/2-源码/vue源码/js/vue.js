class Vue {
  constructor(options) {
    // 1.接收传递的数据
    this.$options = options;
    this.$data = options.data;
    this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el
    // 2.代理data
    this._proxyData(this.$data)
    // 3.调用observer对象
    new Observer(this.$data)
    // 4.调用compiler对象
    new Compiler(this)

  }

  _proxyData(data) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        get() {
          return data[key]
        },
        set(newVal) {
          if (data[key] === newVal) {
            return
          }
          data[key] = newVal
        }
      })
    })
  }
}
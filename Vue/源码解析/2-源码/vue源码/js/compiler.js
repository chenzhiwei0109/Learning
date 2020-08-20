class Compiler {
  // 添加el根元素,vm当前vue实例
  constructor(vm) {
    this.el = vm.$el
    this.vm = vm;
    // 1.获取文档碎片对象放入内存以减少DOM操作
    const fragment = this.node2Fragment(this.el);
    // 2.编译模板fragment
    this.compile(fragment)

    // 3.追加子元素到根元素
    this.el.appendChild(fragment)
  }

  // 节点转换为文档碎片
  node2Fragment(el) {
    const fragment = document.createDocumentFragment()
    while (el.firstChild) {
      fragment.appendChild(el.firstChild);
    }
    return fragment;
  }


  // 编译模板，处理文本节点和元素节点
  compile(el) {
    // 获取内容，转换成数组 Array.from/[...el.childNodes]
    [...el.childNodes].forEach(node => {
      // 处理元素节点
      if (this.isElementNode(node)) {
        // 如果元素节点内有内容，递归调用compile编译这个节点。
        if (node.childNodes) {
          this.compile(node);
        }
        this.compileElement(node)
      } else if (this.isTextNode(node)) { //处理文本节点
        //文本节点
        this.compileText(node)
      }
    })
  }

  // 编译元素节点
  compileElement(node) {
    [...node.attributes].forEach(attr => {
      //   attr = {name:'v-html',value:'msg'}
      let { name: attrName, value: key } = attr

      if (this.isDirective(attrName)) {
        // v-text->text
        attrName = attrName.slice(2);

        // on:click
        const [dirname, eventName] = attrName.split(':')
        this.update(node, key, dirname, eventName)
      }
    })
  }

  // 更新函数(节点,msg,指令类型html)  
  update(node, key, attrName, eventName = '') {
    if (!eventName) {
      let method = attrName + 'Updater';
      let fn = this[method];
      fn && fn.call(this, node, this.getVal(key), key);
    }else{
      
    }

  }

  // 处理v-text指令
  textUpdater(node, value, key) {
    node.textContent = value;
    // 
    new Watcher(this.vm, key, (newValue) => {
      node.textContent = newValue
    })
  }

  //处理v-model指令
  modelUpdater(node, value, key) {
    // 表单元素
    node.value = value
    new Watcher(this.vm, key, (newValue) => {
    })

    // 双向绑定
    node.addEventListener('input', (e) => {
      // key:info.name arr:[info,name]
      let arr = key.split('.');
      let i = 0
      let length = arr.length - 1;
      arr.reduce((data, key) => {
        if (length === i) {
          data[key] = e.target.value;
        }
        i++
        return data[key]
      }, this.vm.$data)
    })
  }

  // 处理v-on指令


  // 编译文本节点，处理mastache语法
  compileText(node) {
    // 判断内容是否是插值表达式。{{ xxxx  }}
    // 判断插值表达式，把变量提取出来。
    // {}在正则表达式是限制范围的意思，需要转义
    // .+匹配所有内容。()是分组的意思。
    const reg = /\{\{(.+?)\}\}/g;
    let value = node.textContent
    if (reg.test(value)) {
      node.textContent = value.replace(reg, (...args) => {

        // 创建watcher对象，数据改变更新视图。
        new Watcher(this.vm, args[1], () => {
          node.textContent = this.getContentVal(value)
        })
        return this.getVal(args[1])
      })
    }
  }

  //递归。
  getVal(str) {
    const path = str.split('.');
    let p = this.vm.$data;
    path.forEach(k => {
      p = p[k]
    })
    return p

    // return str.split('.').reduce((data, currentVal) => {
    //   return data[currentVal]
    // }, this.vm.$data)
  }




  getContentVal(expr,) {
    return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      return this.getVal(args[1])
    })
  }

  // 判断元素属性是否是v-开头的
  isDirective(attrName) {
    return attrName.startsWith('v-')
  }

  // 判断节点是否是文本节点
  isTextNode(node) {
    // nodeType是节点类型 nodeValue是节点值
    // 1:元素 2:attr 3:text 8:注释
    return node.nodeType === 3
  }

  // 判断节点是否是元素节点
  isElementNode(node) {
    return node.nodeType === 1;
  }

}
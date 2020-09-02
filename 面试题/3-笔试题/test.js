class Scheduler {
  constructor() {
    this.list = []
    this.maxNum = 2;
    this.workingNum = 0;
  }

  add(promiseCreator) {//() => timeout(time).then(() => console.log(order))
    this.list.push(promiseCreator)
  }
  start() {
    for (var i = 0; i < this.maxNum; i++) {
      this.doNext()
    }
  }

  doNext() {
    if (this.list.length && this.workingNum < this.maxNum) {
      this.workingNum++;
      this.list.shift()().then(res => {
        this.workingNum--;
        this.doNext();
      })
    }

  }
}

const timeout = time => new Promise(resolve => setTimeout(resolve, time))

const scheduler = new Scheduler()

const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)))
}

// 231
addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
scheduler.start();
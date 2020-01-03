/**
 * 手写一个eventloop
 */
const eventloop = {
  //可以是多个queue
  queue: [],

  loop() {
    while (this.queue.length) {
      var callback = this.queue.shift()
      callback()
    }
    setTimeout(this.loop.bind(this), 50)
  },

  add(callback) {
    this.queue.push(callback)
  }
}

eventloop.loop()

setTimeout(() => {
  eventloop.add(function() {
    console.log(1)
  })
}, 300)

setTimeout(() => {
  eventloop.add(function() {
    console.log(2)
  })
}, 500)

class Queue {
  constructor() {
    this.queue = []
  }

  add(item) {
    this.queue.push(item)
  }

  delete() {
    this.queue.shift()
  }

  size() {
    return this.queue.length
  }

  first() {
    const length = this.queue.length
    if (length < 1) {
      console.log('this queue has no element')
      return
    }
    const result = this.queue[0]
    return result
  }
}

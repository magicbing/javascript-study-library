class Stack {
  constructor() {
    this.stack = []
  }

  add(item) {
    this.stack.push(item)
  }

  delete() {
    this.stack.pop()
  }

  size() {
    return this.stack.length
  }

  last() {
    const length = this.stack.length
    if (length < 1) {
      console.log('this stack has no element')
      return
    }
    const result = this.stack[length - 1]
    return result
  }
}

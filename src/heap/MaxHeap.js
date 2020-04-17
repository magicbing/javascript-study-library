class MaxHeap {
  constructor() {
    this.heap = []
    this.length = 0
  }

  max() {
    return this.heap[1]
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  insert(value) {
    this.length++
    this.heap[this.length] = value
    this.swim(this.length)
  }

  deleteMax() {
    if (this.heap.length === 0) {
      return false
    }

    let max = this.heap[1]
    this.exch(1, this.length)
    this.length--
    this.heap[this.length + 1] = null
    this.heap.length--
    this.sink(1)

    return max
  }

  less(i, j) {
    return this.heap[i] < this.heap[j]
  }

  exch(i, j) {
    let temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  swim(k) {
    while (k > 1 && this.less((k >> 1), k)) {
      let half = k >> 1
      this.exch(half, k)
      k = half
    }
  }

  sink(k) {
    while (2 * k <= this.length) {
      let double = 2 * k
      if (double < this.length && this.less(double, double + 1)) {
        double++
      }
      if (!this.less(k, double)) {
        break
      }
      this.exch(k, double)
      k = double
    }
  }
}

// let heap = new MaxHeap()
// heap.insert(1)
// heap.insert(2)
// heap.insert(3)
// heap.insert(123)
// heap.deleteMax()
// heap.max()

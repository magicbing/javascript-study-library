function Promise(executor) {
  this.status = 'pending'
  this.value = null
  this.resolveQueue = []
  this.rejectQueue = []

  let resolve = value => {
    setTimeout(() => {
      if (this.status === 'pending') {
        this.status = 'fulfilled'
        this.value = value

        while (this.resolveQueue.length > 0) {
          let cur = this.resolveQueue.shift()
          cur(value)
        }
      }
    }, 0);
  }

  let reject = value => {
    setTimeout(() => {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.value = value

        while (this.rejectQueue.length > 0) {
          let cur = this.rejectQueue.shift()
          cur(value)
        }
      }
    }, 0);
  }

  executor(resolve, reject)
}

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' || typeof onRejected !== 'function') {
    return null
  }

  let result = new Promise(function(resolve, reject) {
    let resolveFn = value => {
      try {
        let cur = onFulfilled(value)
        if (cur instanceof Promise) {
          cur.then(resolve, rejectFn)
        } else {
          resolve(x)
        }
      } catch(error) {
        reject(error)
      }
    }

    let rejectFn = error => {
      try {
        let cur = onRejected(error)
        if (cur instanceof Promise) {
          cur.then(resolve, reject)
        } else {
          resolve(cur)
        }
      } catch(error) {
        reject(error)
      }
    }

    if (this.status === 'pending') {
      this.resolveQueue.push(resolveFn)
      this.rejectQueue.push(rejectFn)
    } else if (this.status === 'fulfilled') {
      resolveFn(this.value)
    } else if (this.status === 'rejected') {
      rejectFn(this.value)
    }
  })

  return result
}

Promise.prototype.catch = function(rejectFn) {
  return this.then(undefined, rejectFn)
}

Promise.resolve = function(value) {
  let result
  if (value instanceof Promise) {
    result = value
  } else {
    result = new Promise(resolve => resolve(value))
  }

  return result
}

Promise.reject = function(error) {
  return new Promise((resolve, reject) => reject(error))
}

Promise.prototype.finally = function(callback) {
  return this.then(
    value => Promise.resolve(callback()).then(() => value),
    error => Promise.resolve(callback()).then(() => error)
  )
}

class TreeNode {
  constructor(key, val, N) {
    this.key = key
    this.val = val
    this.N = N
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  
  size(x = this.root) {
    if (x === null) {
      return 0
    } else {
      return x.N
    }
  }

  get(key) {
    const core = function (x = this.root, key) {
      if (x === null) {
        return null
      }
  
      if (key < x.key) {
        return this.get(x.left, key)
      } else if (key > x.key) {
        return this.get(x.right, key)
      } else {
        return x.val
      }
    }

    return core(this.root, key)
  }

  put(key, val) {
    const size = this.size
    const core = function (x, key, val) {
      if (x === null) {
        return new TreeNode(key, val, 1)
      }
  
      if (key < x.key) {
        x.left = core(x.left, key, val)
      } else if (key > x.key) {
        x.right = core(x.right, key, val)
      } else {
        x.val = val
      }
      x.N = size(x.left) + size(x.right) + 1
  
      return x
    }

    this.root = core(this.root, key ,val)
  }

  max() {
    const core = function(x) {
      if (x.right === null) {
        return x
      }
      return core(x.right)
    }

    return core(this.root).key
  }

  min() {
    const core = function(x) {
      if (x.left === null) {
        return x
      }
      return core(x.left)
    }

    return core(this.root).key
  }

  floor(key) {
    const core = function(x, key) {
      if (x === null) {
        return null
      }
      if (key === x.key) {
        return x
      } else if (key < x.key) {
        return core(x.left, key)
      }
      const t = core(x.right, key)
      if (t !== null) {
        return t
      } else {
        return x
      }
    }

    const x = core(this.root, key)
    if (x === null) {
      return null
    }

    return x.key
  }

  ceiling(key) {
    const core = function(x, key) {
      if (x === null) {
        return null
      }
      if (key === x.key) {
        return x
      } else if (key > x.key) {
        return core(x.right, key)
      }
      const t = core(x.left, key)
      if (t !== null) {
        return t
      } else {
        return x
      }
    }

    const x = core(this.root, key)
    if (x === null) {
      return null
    }
    return x.key
  }

  select() {}

  rank() {}

  delete() {}

  deleteMin() {}

  deleteMax() {}

  keys() {}
}

q = new BinarySearchTree()
q.put(3, 3)
q.put(1, 1)
q.put(5, 5)

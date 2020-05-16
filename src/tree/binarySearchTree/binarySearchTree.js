class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.tree = null
    this.size = 0
  }

  add(val) {
    const newNode = new TreeNode(val)
    const curNode = this.tree

    const core = function(val, tree) {
      if (tree === null || val === tree.val) {
        return tree
      }
      if (val < tree.val) {
        if (tree.left === null) {
          return tree
        } else {
          return core(val, tree.left)
        }
      } else {
        if (tree.right === null) {
          return tree.right
        } else {
          return core(val, tree.right)
        }
      }
    }

    if (curNode === null) {
      this.tree = newNode
    } else {
      console.log('add else')
      let temp = core(val, curNode)
      console.log(temp)
      temp.left = newNode
    }
  }

  get(val) {
    console.log('get')
    const core = function(val, tree) {
      if (tree === null || val === tree.val) {
        return tree
      }
      if (val < tree.val) {
        if (tree.left === null) {
          return tree.left
        } else {
          return core(val, tree.left)
        }
      } else {
        if (tree.right === null) {
          return tree.right
        } else {
          return core(val, tree.right)
        }
      }
    }

    const result = core(val, this.tree)
    console.log(result === this.tree.left, result)
    return result
  }

  size() {
    return this.size
  }

  delete(val) {

  }
}

q = new BinarySearchTree()
q.add(2)
q.add(1)
q.add(3)
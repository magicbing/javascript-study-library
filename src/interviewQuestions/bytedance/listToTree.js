var list = [
  'h3',
  'h2', 'h3',
  'h1', 'h2', 'h3', 'h3', 'h2', 'h3',
  'h1', 'h2', 'h4', 'h2', 'h3',
]

let listToTree = function(list) {
  if (list === null || list.length === 0) {
    return []
  }

  let TreeNode = function(name) {
    this.name = name
    this.child = []
  }

  let generateTree = function(start, end) {
    let node = new TreeNode(list[start])
    node.child = listToTree(list.slice(start + 1, end + 1))

    return node
  }

  let core = function(start, end) {
    let slow = start
    let fast = start
    while (fast <= end) {
      fast++
      while (fast <= end && list[slow].slice(1) < list[fast].slice(1)) {
        fast++
      }
      result.push(generateTree(slow, fast - 1))
      slow = fast
    }
  }

  let result = []
  core(0, list.length - 1)

  return result
}

let tree = listToTree(list)

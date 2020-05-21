const flat = function (list, depth = 1) {
  if (list === null) {
    return false
  }
  
  let result = []

  const core = function (list, depth) {
    for (let i=0; i<list.length; i++) {
      if (Array.isArray(list[i]) && depth > 0) {
        core(list[i], depth - 1)
      } else {
        result.push(list[i])
      }
    }
  }
  
  core(list, depth)

  return result
}

// const list = [1, 2, [3, 4], [5, 6, [7, 8]], 9]
// flat(list)

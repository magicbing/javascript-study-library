const swap = function(list, index1, index2) {
  let temp = list[index1]
  list[index1] = list[index2]
  list[index2] = temp
}

const getMinIndex = function(list, start, end) {
  let min = Number.MAX_SAFE_INTEGER
  let result = start
  for (let i=start; i<=end; i++) {
    if (list[i] < min) {
      min = list[i]
      result = i
    }
  }

  return result
}

const selectSort = function(nums) {
  if (nums === null) {
    return
  }

  const length = nums.length

  for (let i=0; i<length - 1; i++) {
    swap(nums, i, getMinIndex(nums, i, length - 1))
  }

  return nums
}

// arr = [9,3,10,5,7,1,2,9]
// selectSort(arr)

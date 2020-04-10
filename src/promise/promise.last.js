Promise.last = function(promiseArray) {
  let length = promiseArray.length
  let index = 0
  let lastResolve = null
  
  let result = new Promise(function(resolve, reject) {
    let core = function() {
      index++
      if (index === length) {
        if (lastResolve !== null) {
          resolve(lastResolve)
        } else{
          reject('All promises in promiseArray were rejected.')
        }
      }
    }
  
    for (let prs of promiseArray) {
      Promise.resolve(prs)
        .then(res => {
          lastResolve = res
          core()
        })
        .catch(() => {
          core()
        })
    }
  })

  return result
}

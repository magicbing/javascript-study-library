Promise.any = function(promiseArray) {
  let length = promiseArray.length
  let index = 0
  let resolveArray = []

  let result = new Promise(function(resolve, reject) {
    let core = function() {
      index++
      if (index === length) {
        if (resolveArray.length === 0) {
          reject('All promises in promiseArray were rejected.')
        } else {
          resolve(resolveArray)
        }
      }
    }

    for (let prs of promiseArray) {
      Promise.resolve(prs)
        .then(res => {
          resolveArray.push(res)
          core()
        })
        .catch(rej => {
          core()
        })
    }
  })

  return result
}

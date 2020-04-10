Promise.all = function(promiseArray) {
  let length = promiseArray.length
  let index = 0
  let resolveArray = []
  let firstReject = null

  let result = new Promise(function(resolve, reject) {
    let core = function() {
      index++

      if (firstReject !== null) {
        reject(firstReject)
      } else if (index === length) {
        resolve(resolveArray)
      }
    }

    for (let prs of promiseArray) {
      Promise.resolve(prs)
        .then(res => {
          resolveArray.push(res)
          core()
        })
        .catch(rej => {
          firstReject = rej
          core()
        })
    }
  })

  return result
}
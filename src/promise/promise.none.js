Promise.none = function(promiseArray) {
  let length = promiseArray.length
  let index = 0
  let rejectArray = []

  let result = new Promise(function(resolve, reject) {
    for (let prs of promiseArray) {
      let core = function() {
        index++
        if (index === length) {
          if (rejectArray.length === length) {
            resolve(rejectArray)
          } else {
            reject('At least one promise in promiseArray was resolved.')
          }
        }
      }

      Promise.resolve(prs)
        .then(res => {
          core()
        })
        .catch(rej => {
          rejectArray.push(rej)
          core()
        })
    }
  })

  return result
}
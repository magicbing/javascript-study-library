Promise.race = function(promiseArray) {
  let result = new Promise(function(resolve, reject) {
    for (let prs of promiseArray) {
      Promise.resolve(prs)
        .then(res => {
          resolve(res)
        })
        .catch(rej => {
          reject(rej)
        })
    }
  })

  return result
}

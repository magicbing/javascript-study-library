Promise.first = function(promiseArray) {
  let result = new Promise(function(resolve, reject) {
    let length = promiseArray.length
    let index = 0

    for (let prs of promiseArray) {
      Promise.resolve(prs)
        .then(res => resolve(res))
        .catch(() => {
          index++
          if (index === length) {
            reject('All promises in promiseArray were rejected.')
          }
        })
    }
  })

  return result
}
